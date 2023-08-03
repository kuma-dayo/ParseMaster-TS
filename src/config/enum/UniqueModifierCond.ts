import { EnumDefault } from "."

enum types {
  Greater = 0,
  Smaller = 1,
}

export const UniqueModifierCond: EnumDefault = {
  __signed: true,
  types: types,
}
