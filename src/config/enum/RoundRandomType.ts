import { EnumDefault } from "."

enum types {
  None = 0,
  Floor = 1,
  Ceil = 2,
  Round = 3,
}

export const RoundRandomType: EnumDefault = {
  __signed: true,
  types: types,
}
