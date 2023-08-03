import { EnumDefault } from "."

enum types {
  Idle = 0,
  ToExplode = 1,
  Falling = 2,
  Cleared = 3,
}

export const EraseBrickActivity_State: EnumDefault = {
  __signed: true,
  types: types,
}
