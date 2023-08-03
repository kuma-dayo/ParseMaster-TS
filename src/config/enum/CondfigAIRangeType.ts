import { EnumDefault } from "."

enum types {
  RangeDefault = 0,
  RangeXZ_Y = 1,
}

export const CondfigAIRangeType: EnumDefault = {
  __signed: true,
  types: types,
}