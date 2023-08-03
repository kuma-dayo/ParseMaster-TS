import { EnumDefault } from "."

enum types {
  None = 0,
  Attack = 1,
  Explode = 2,
  Cleared = 3,
}

export const EraseBrickActivity_BrokenReason: EnumDefault = {
  __signed: true,
  types: types,
}
