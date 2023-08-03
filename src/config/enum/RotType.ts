import { EnumDefault } from "."

enum types {
  ROT_NONE = 0,
  ROT_ANGLE = 1,
  ROT_ROUND = 2,
}

export const RotType: EnumDefault = {
  __signed: true,
  types: types,
}
