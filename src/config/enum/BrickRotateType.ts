import { EnumDefault } from "."

enum types {
  BRICK_ROTATE_NONE = 0,
  BRICK_ROTATE_45 = 1,
  BRICK_ROTATE_90 = 2,
}

export const BrickRotateType: EnumDefault = {
  __signed: true,
  types: types,
}
