import { EnumDefault } from "."

enum types {
  Add = 0,
  Set = 1,
}

export const GlobalValueChangeType: EnumDefault = {
  __signed: true,
  types: types,
}
