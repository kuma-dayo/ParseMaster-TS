import { readFileSync } from "fs"

export default class DeReader {
  private readonly reader: Buffer
  private position: number

  constructor(filename: string) {
    const fileData = readFileSync(filename)
    this.reader = Buffer.from(fileData)
    this.position = 0
  }

  public lenToEof(): number {
    return this.reader.length - this.position
  }

  public readBool(): boolean {
    const b = this.reader.readUInt8(this.position)
    this.position += 1

    switch (b) {
      case 0:
        return false
      case 1:
        return true
      default:
        throw new Error(`Invalid boolean value: ${b}`)
    }
  }

  public readU8(): number {
    const value = this.reader.readUInt8(this.position)
    this.position += 1
    return value
  }

  public readS8(): number {
    const value = this.reader.readInt8(this.position)
    this.position += 1
    return value
  }

  public readU16(): number {
    const value = this.reader.readUInt16LE(this.position)
    this.position += 2
    return value
  }

  public readS16(): number {
    const value = this.reader.readInt16LE(this.position)
    this.position += 2
    return value
  }

  public readU16Be(): number {
    const a = this.reader.readUInt8(this.position)
    const b = this.reader.readUInt8(this.position + 1)
    this.position += 2
    return (a << 8) | b
  }

  public readS32(): number {
    const value = this.reader.readInt32LE(this.position)
    this.position += 4
    return value
  }

  public readU32(): number {
    const value = this.reader.readUInt32LE(this.position)
    this.position += 4
    return value
  }

  public readU64(): bigint {
    const value = this.reader.readBigUInt64LE(this.position)
    this.position += 8
    return value
  }

  public readF32(): number {
    const value = this.reader.readFloatLE(this.position)
    this.position += 4
    return value
  }

  public readF64(): number {
    const value = this.reader.readDoubleLE(this.position)
    this.position += 8
    return value
  }

  public readVarInt(): number {
    const encoded = this.readVarUInt()
    const sign = encoded & BigInt(1)
    const absValue = encoded >> BigInt(1)
    return Number(sign === BigInt(0) ? absValue : ~(absValue - BigInt(1)))
  }

  public readVarUInt(): bigint {
    let shift = BigInt(0)
    let result = BigInt(0)

    // VarInt is max 128 bits => 19 bytes (+1 extra just for cute round number)
    for (let i = 0; i < 20; i++) {
      const byteValue = this.reader.readUInt8(this.position)
      this.position += 1

      const tmp = BigInt(byteValue & 0x7f)
      result |= tmp << shift

      if ((byteValue & 0x80) !== 0x80) {
        return result
      }

      shift += BigInt(7)
    }

    throw new Error("Invalid VarUInt encoding.")
  }

  public readString(): string {
    const len = Number(this.readVarUInt())
    const bytes = this.reader.slice(this.position, this.position + len)
    this.position += len
    const str = bytes.toString("utf8")
    return str.replace(/([\\\\"])/g, "\\$1")
  }

  public peekByte(): number {
    const byteValue = this.reader.readUInt8(this.position)
    return byteValue
  }
}
