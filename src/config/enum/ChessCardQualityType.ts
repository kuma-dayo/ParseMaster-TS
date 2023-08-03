import { EnumDefault } from "."

enum types {
  CARD_QUALITY_NORAML = 0,
  CARD_QUALITY_GOOD = 1,
  CARD_QUALITY_PERCECT = 2,
}

export const ChessCardQualityType: EnumDefault = {
  __signed: true,
  types: types,
}
