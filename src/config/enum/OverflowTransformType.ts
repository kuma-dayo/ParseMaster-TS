import { EnumDefault } from "."

enum types {
  OVERFLOW_TRANSFORM_NONE = 0,
  OVERFLOW_TRANSFORM_PLAYER_EXP = 1,
}

export const OverflowTransformType: EnumDefault = {
  __signed: true,
  types: types,
}
