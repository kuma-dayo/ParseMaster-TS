import DeReader from "./deReader"

export class BitMask {
  private readonly _len: bigint
  private readonly _mask: bigint
  private readonly _excelMask?: number[]

  constructor(reader: DeReader) {
    //TODO: BinOutput

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

  public TestBit(index: number): boolean {
    if (index >= Number(this._len) * 8) return false

    return this._excelMask !== undefined
      ? (this._excelMask[index >> 5] & (1 << (index & 0x1f))) !== 0
      : (this._mask & (1n << BigInt(index))) !== BigInt(0)
  }
}
