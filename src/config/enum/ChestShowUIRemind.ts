import { EnumDefault } from "."

enum types {
  None = 0,
  Normal = 1,
  AllShow = 2,
}

export const ChestShowUIRemind: EnumDefault = {
  __signed: true,
  types: types,
}