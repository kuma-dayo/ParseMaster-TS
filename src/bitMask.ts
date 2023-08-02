import DeReader from "./deReader"

class BitMask {
  protected _len: bigint
  protected _mask: bigint
  protected _excelMask?: number[]

  public TestBit(index: number): boolean {
    if (index >= Number(this._len) * 8) return false

    return this._excelMask !== undefined
      ? (this._excelMask[index >> 5] & (1 << (index & 0x1f))) !== 0
      : (this._mask & (1n << BigInt(index))) !== BigInt(0)
  }
}

export class ExcelBitMask extends BitMask {
  constructor(reader: DeReader) {
    super()

    this._len = reader.readVarUInt()
    this._excelMask = new Array<number>(Number(this._len / BigInt(4)) + 1)

    for (let i = 0; i < Number(this._len / BigInt(4)); i++) {
      this._excelMask[i] = reader.readU32()
    }

    // read leftovers
    for (let i = 0; i < Number(this._len % BigInt(4)); i++) {
      if (this._excelMask[Number(this._len / BigInt(4))] === undefined) {
        this._excelMask[Number(this._len / BigInt(4))] = 0
      }
      this._excelMask[Number(this._len / BigInt(4))] |= reader.readU8() << (i * 8)
    }
  }
}

export class BinOutBitMask extends BitMask {
  constructor(reader: DeReader, small: boolean) {
    super()

    this._mask = small ? BigInt(reader.readU8()) : reader.readVarUInt()
    this._len = BigInt(8)
  }
}
