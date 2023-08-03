import { EnumDefault } from "."

enum types {
  IRODORI_CARD_QUALITY_NORAML = 0,
  IRODORI_CARD_QUALITY_GOOD = 1,
  IRODORI_CARD_QUALITY_PERCECT = 2,
}

export const IrodoriChessCardQualityType: EnumDefault = {
  __signed: true,
  types: types,
}
