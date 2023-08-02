import { BitMask } from "./bitMask"
import * as Config from "./config"
import * as ConfigEnum from "./config/enum"
import DeReader from "./deReader"
import { FileType } from "./FileType"
import PMLogger from "./logger"

const logger = PMLogger.getInstance()

export default class Parser {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  parseFile(filename: string, classname: string, mode: FileType, derivation: boolean) {
    const reader = new DeReader(filename)
    const multiple = mode == FileType.Single
    if (multiple) return ""

    const length = (() => {
      switch (mode) {
        case FileType.List:
          return reader.readVarUInt()
        case FileType.ListDictionary:
          return reader.readVarUInt()
        case FileType.Packed:
          return reader.readVarInt()
        default:
          return 1
      }
    })()

    const items: string[] = (() => {
      switch (mode) {
        case FileType.Packed:
          return [...Array(length)].map((_, i) => `{${this.parseClassInt(classname, reader)}}`)

        case FileType.TextMap:
          return [this.parseTextMap(reader)]

        default:
          throw new Error(`Invalid mode ${mode}`)
      }
    })()

    const len = reader.lenToEof()
    if (len != 0) throw new Error(`${filename} not fully read ${len} bytes left!!`)

    return `[${items.join(",")}]`
  }

  parseTextMap(reader: DeReader) {
    const items: String[] = []
    while (reader.lenToEof() > 0) {
      //idk what is this do not ask me
      const one = Number(reader.readVarUInt())
      const three = Number(reader.readVarUInt())

      if (one != 1 || three != 3) throw new Error("wtf")

      const key = this.parseFieldType("vuint", reader)
      const value = this.parseFieldType("string", reader)

      items.push(`"${key}": ${value}`)
    }

    return `{${items.join(",")}}`
  }

  parseClass(className: string, reader: DeReader, derivation: boolean) {
    let output: string[]
    const derivedClass: string = null
    let rootClassname = className

    //TODO derivedClass

    if (!derivedClass) {
      rootClassname = this.getBasestBase(className)
      output = this.parseClassInt(className, reader, rootClassname)
    }

    return `{${output.join(",")}}`
  }

  getBasestBase(className: string) {
    let baseClass = className
    while (<Config.ConfigDefault>Config[baseClass]) {
      baseClass = Config[baseClass].baseClass
    }

    return baseClass
  }

  mergeFields(fields: { [key: string]: string }, className: string) {
    const config = <Config.ConfigDefault>Config[className]
    const baseconfig = <Config.ConfigDefault>Config[config.baseClass]

    if (!baseconfig) {
      return fields
    }

    if (!baseconfig.Fields) {
      throw new Error(`Base class ${config.baseClass} not found!`)
    }
    baseconfig.Fields = this.mergeFields(baseconfig.Fields, config.baseClass)

    const mergedFields: { [key: string]: string } = fields

    for (const key in baseconfig.Fields) {
      if (!fields[key]) {
        mergedFields[key] = baseconfig.Fields[key]
      }
    }
    return mergedFields
  }

  parseClassInt(className: string, reader: DeReader, baseClassName?: string) {
    const output: string[] = []
    const config = <Config.ConfigDefault>Config[className]
    // Config[]
    if (!config) throw new Error(`Class ${className} not found!`)

    const hasBase = !!config.baseClass || (!!baseClassName && className.includes(baseClassName))
    const isExcel = config.isExcel

    if (hasBase && isExcel) {
      config.Fields = this.mergeFields(config.Fields, className)
    }

    const fieldKeys = Object.keys(config.Fields)

    logger.debug(`Parsing Class ${className} (${fieldKeys.length} fields)`)

    let j = 0
    if (fieldKeys.length > 0) {
      const bm = isExcel ? new BitMask(reader) : null //TODO: new BitMask(reader, fieldKeys.length <= 8)

      fieldKeys.forEach((fieldName) => {
        const fieldType = config.Fields[fieldName]

        if (bm.TestBit(j)) {
          const ret = this.parseFieldType(fieldType, reader)

          logger.debug(`Field (${j}) ${fieldName}, type: ${fieldType} = ${ret}`)
          output.push(`"${fieldName}": ${ret}`)
        } else {
          logger.debug(`Skipping field (${j}) ${fieldName}`)
        }

        // HACK: two hash fields are treated like one
        if (!fieldName.endsWith("HashSuffix")) {
          j++
        }
      })
    }
    return output
  }

  private parseFieldType(fieldType: string, reader: DeReader) {
    switch (true) {
      case fieldType.endsWith("[]"): {
        const items: string[] = []
        fieldType = fieldType.slice(0, -2)

        const length = reader.readVarUInt()

        logger.debug(`(${length}) [`)
        for (let i = 0; i < length; i++) {
          items.push(this.parseFieldType(fieldType, reader))
        }
        logger.debug(`]`)

        return `[${items.join(", ")}]`
      }
      case !!ConfigEnum[fieldType]: {
        const configEnum = <ConfigEnum.EnumDefault>ConfigEnum[fieldType]

        const value = configEnum.__signed ? reader.readVarInt() : reader.readVarUInt()
        const sValue = configEnum.types[value.toString()]

        return `"${sValue}"`
      }
      case fieldType == "string":
        const stringValue = reader.readString()
        return `"${stringValue}"`
      case fieldType == "vuint":
        const vuintValue = reader.readVarUInt()
        return vuintValue.toString()
      case fieldType == "vint":
        const vintValue = reader.readVarInt()
        return vintValue.toString()
      case fieldType == "byte":
        const byteValue = reader.readU8()
        return byteValue.toString()
      case fieldType == "bool":
        const boolValue = reader.readBool()
        return boolValue.toString()
      case fieldType == "float":
        const f32Value = reader.readF32()
        return f32Value.toString() //TODO: FormatFloat
      case fieldType == "double":
        const f64Value = reader.readF64()
        return f64Value.toString() //TODO: FormatFloat
      case !!Config[fieldType]:
        return this.parseClass(fieldType, reader, true)
      default:
        throw new Error(`Type ${fieldType} is not supported`)
    }
  }
}
