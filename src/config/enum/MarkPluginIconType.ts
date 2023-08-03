import { EnumDefault } from "."

enum types {
  None = 0,
  Boss = 1,
  Character = 2,
  Paimon = 3,
}

export const MarkPluginIconType: EnumDefault = {
  __signed: true,
  types: types,
}