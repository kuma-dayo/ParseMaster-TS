import { EnumDefault } from "."

enum types {
  BRICK_TYPE_NONE = 0,
  BRICK_TYPE_COIN = 1,
  BRICK_TYPE_FINISH = 2,
}

export const BrickType: EnumDefault = {
  __signed: true,
  types: types,
}
