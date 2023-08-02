import { EnumDefault } from "."

enum types {
  QUALITY_NONE = 0,
  QUALITY_WHITE = 1,
  QUALITY_GREEN = 2,
  QUALITY_BLUE = 3,
  QUALITY_PURPLE = 4,
  QUALITY_ORANGE = 5,
  QUALITY_ORANGE_SP = 105,
}

export const QualityType: EnumDefault = {
  __signed: true,
  types: types,
}
