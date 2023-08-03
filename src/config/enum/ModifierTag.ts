import { EnumDefault } from "."

enum types {
  None = 0,
  Corruption = 1,
}

export const ModifierTag: EnumDefault = {
  __signed: true,
  types: types,
}
