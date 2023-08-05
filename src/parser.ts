import { BinOutBitMask, ExcelBitMask } from "./bitMask"
import * as Config from "./config"
import * as ConfigEnum from "./config/Enum"
import * as TypeIndex from "./config/TypeIndex"
import DeReader from "./deReader"
import { FileType } from "./FileType"
import PMLogger from "./logger"

const logger = PMLogger.getInstance()

export default class Parser {
  private readonly parseRpn: boolean
  private readonly baseMap: string[]
  constructor(parseRpn: boolean) {
    this.parseRpn = parseRpn
    this.baseMap = []

    //TODO: Delete this HACK code
    Object.entries(Config).forEach(([key, value]) => {
      if (value["baseClass"] && !this.baseMap.includes(value["baseClass"])) {
        this.baseMap.push(value["baseClass"])
      }
    })
  }

  parseFile(filename: string, classname: string, mode: FileType, derivation: boolean) {
    const reader = new DeReader(filename)
    const multiple = mode != FileType.Single
    if (!multiple) return this.parseClass(classname, reader, derivation)

    const length = (() => {
      switch (mode) {
        case FileType.List:
        case FileType.ListDictionary:
          return Number(reader.readVarUInt())
        case FileType.Packed:
          return reader.readVarInt()
        default:
          return 1
      }
    })()

    const items: string[] = (() => {
      switch (mode) {
        case FileType.ListDictionary:
          return [...Array(length)].map((v, i) => this.parseDictionary(reader, "string", classname))
        case FileType.List:
          return [...Array(length)].map((_, i) => this.parseClass(classname, reader, derivation))
        case FileType.Dictionary:
          return [this.parseDictionary(reader, "string", classname)]
        case FileType.DictionaryList:
          return [this.parseDictionary(reader, "string", `${classname}[]`)]
        case FileType.DictionaryVuit:
          return [this.parseDictionary(reader, "vuint", classname)]
        case FileType.DictionaryVuitVuit:
          return [this.parseDictionary(reader, "vuint", "vuint")]
        case FileType.Packed:
          return [...Array(length)].map(
            (_, i) => `{${this.parseClassInt(classname, reader, Config.get(classname).baseClass)}}`
          )
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

  parseDictionary(reader: DeReader, keyType: string, valueType: string) {
    const size = reader.readVarUInt()
    logger.debug(`Dict size: ${size}`)

    const items: string[] = []
    for (let i = 0n; i < size; i++) {
      let key = this.parseFieldType(keyType, reader)
      logger.debug(`Parsing key ${key} with type ${valueType}`)

      if (!key.includes('"')) {
        key = `"${key}"`
      }

      items.push(`${key}: ${this.parseFieldType(valueType, reader)}`)
    }
    return `{${items.join(",")}}`
  }
  parseClass(className: string, reader: DeReader, derivation: boolean) {
    const output: string[] = []
    let derivedClass: string = null
    let rootClassname = className

    if (derivation && this.hasDerivedClasses(className)) {
      rootClassname = this.getBasestBase(className)

      let classId = reader.readVarUInt()

      const typeIndex = TypeIndex.get(rootClassname)
      derivedClass = typeIndex[classId.toString()]

      if (!derivedClass) throw new Error(`Derived class for ${className} (id ${classId}) not found!`)

      logger.debug(`Deriving class ${classId} (${derivedClass})`)
    }

    if (!derivedClass) {
      rootClassname = this.getBasestBase(className)
      output.push(...this.parseClassInt(className, reader, rootClassname))
    } else {
      output.push(...this.parseClassInt(derivedClass, reader, rootClassname))
    }

    logger.debug(`{${output.join(",")}}`)
    return `{${output.join(",")}}`
  }

  hasDerivedClasses(className: string): boolean {
    return this.baseMap.includes(className)
  }
  getBasestBase(className: string) {
    let baseClass = className
    while (Config.get(baseClass).baseClass) {
      baseClass = Config.get(baseClass).baseClass
    }

    return baseClass
  }

  mergeFields(fields: { [key: string]: string }, className: string) {
    const config = Config.get(className)
    const baseconfig = Config.get(config.baseClass)

    if (!baseconfig) return fields
    else if (!baseconfig.Fields) throw new Error(`Base class ${config.baseClass} not found!`)

    baseconfig.Fields = this.mergeFields(baseconfig.Fields, config.baseClass)

    const mergedFields: { [key: string]: string } = fields

    for (const key in Object.keys(baseconfig.Fields)) {
      if (!fields[key]) {
        mergedFields[key] = baseconfig.Fields[key]
      }
    }
    return mergedFields
  }

  parseClassInt(className: string, reader: DeReader, baseClassName?: string) {
    const output: string[] = []
    const config = Config.get(className)
    if (!config) throw new Error(`Class ${className} not found!`)

    const hasBase = !!baseClassName && className != baseClassName
    const isExcel = config.attribute.includes("excel")

    if (hasBase && !isExcel && config.baseClass) {
      output.push(...this.parseClassInt(config.baseClass, reader, baseClassName))
    }
    if (hasBase && isExcel) {
      config.Fields = this.mergeFields(config.Fields, className)
    }

    const fields = Object.entries(config.Fields)

    logger.debug(`Parsing Class ${className} (${fields.length} fields)`)

    let j = 0
    if (fields.length > 0) {
      const bm = isExcel ? new ExcelBitMask(reader) : new BinOutBitMask(reader, fields.length <= 8)

      fields.forEach(([fieldName, fieldType]: [string, string]) => {
        if (bm.TestBit(j)) {
          const ret = this.parseFieldType(fieldType, reader)

          logger.debug(`Field (${j}) ${fieldName}, type: ${fieldType} = ${ret.length < 500 ? ret : "500 over"}`)
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

        const attribute = Config.get(fieldType)?.attribute
        const length =
          attribute?.includes("excel") && !attribute?.includes("nozig")
            ? reader.readVarInt()
            : Number(reader.readVarUInt())

        logger.debug(`(${length}) [`)
        for (let i = 0; i < length; i++) {
          items.push(this.parseFieldType(fieldType, reader))
        }
        logger.debug(`]`)

        return `[${items.join(", ")}]`
      }
      case !!ConfigEnum[fieldType]: {
        const configEnum = ConfigEnum.get(fieldType)

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
      case fieldType == "DynamicFloat":
        return this.readDynamicFloat(reader)
      case fieldType == "DynamicInt":
        return this.readDynamicInt(reader)
      case fieldType == "DynamicArgument":
        return this.readDynamicArgument(reader)
      case fieldType == "DynamicString":
        const isDynamic = reader.readBool()
        if (isDynamic) {
        }

        const dynamicStringValue = reader.readString()
        return `"${dynamicStringValue}"`

      case !!Config[fieldType]:
        return this.parseClass(fieldType, reader, true)
      case fieldType.startsWith("map<"):
        const typeArgs = fieldType.substring(fieldType.indexOf("<") + 1, fieldType.lastIndexOf(">")).split(",")
        const keyType = typeArgs[0]
        let valueType = typeArgs[1]

        if (typeArgs.length == 3) {
          valueType += `,${typeArgs[2]}`
        }

        return this.parseDictionary(reader, keyType, valueType)

      default:
        throw new Error(`Type ${fieldType} is not supported`)
    }
  }
  private readDynamicArgument(reader: DeReader) {
    // Credit goes to Raz
    let typeIndex = Number(reader.readVarUInt())

    return (() => {
      switch (typeIndex) {
        case 1:
          return reader.readS8().toString()
        case 2:
          return reader.readU8().toString()
        case 3:
          return reader.readS16().toString()
        case 4:
          return reader.readU16().toString()
        case 5:
          return reader.readS32().toString()
        case 6:
          return reader.readU32().toString()
        case 7:
          return reader.readF32().toString() // TODO: FormatFloat
        case 8:
          return reader.readF64().toString() // TODO: FormatFloat
        case 9:
          return reader.readBool().toString().toLowerCase()
        case 10:
          return `"${reader.readString()}"`
        default:
          throw new Error(`Unhandled DynamicArgument type ${typeIndex}`)
      }
    })()
  }
  private readDynamicInt(reader: DeReader) {
    let isString = reader.readBool()
    return isString ? `"${reader.readString()}"` : reader.readVarInt().toString()
  }

  private readDynamicFloat(reader: DeReader) {
    const isFormula = reader.readBool()

    if (isFormula) {
      const count = reader.readVarInt()
      const components: string[] = []

      for (let i = 0; i < count; i++) {
        const isOperator = reader.readBool()
        if (isOperator) {
          const op = reader.readVarInt()
          if (this.parseRpn) {
            const s0p = (() => {
              switch (op) {
                case 0:
                  return "+"
                case 1:
                  return "-"
                case 11:
                  return "*"
                case 12:
                  return "/"
                default:
                  return op.toString()
              }
            })()

            components.push(`${s0p}`)
          } else {
            const s0p = (() => {
              switch (op) {
                case 0:
                  return "ADD"
                case 1:
                  return "SUB"
                case 11:
                  return "MUL"
                case 12:
                  return "DIV"
                default:
                  return op.toString()
              }
            })()

            components.push(`"${s0p}"`)
          }
        } else {
          const isString = reader.readBool()
          components.push(
            isString
              ? this.parseRpn
                ? `%${reader.readString()}`
                : `"${reader.readString()}"`
              : reader.readF32().toString() //tostring(CultureInfo.InvariantCulture)?
          )
        }
      }

      return this.parseRpn ? `"${this.rpnToString(components)}"` : `[${components.join(",")}]`
    }

    {
      const isString = reader.readBool()
      return isString ? `"${reader.readString()}"` : reader.readF32().toString() //tostring(CultureInfo.InvariantCulture)?
    }
  }

  public rpnToString(tokens: string[]): string {
    const stack: string[] = []
    for (const token of tokens) {
      if (token === "+" || token === "-" || token === "*" || token === "/") {
        const operand2 = stack.pop()
        const operand1 = stack.pop()
        const expression = operand1 + token + operand2
        stack.push(expression)
      } else {
        stack.push(token)
      }
    }
    return stack.pop()
  }
}
