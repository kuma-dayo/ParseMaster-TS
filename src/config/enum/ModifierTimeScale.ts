import { EnumDefault } from "."

enum types {
  Owner = 0,
  Level = 1,
}

export const ModifierTimeScale: EnumDefault = {
  __signed: true,
  types: types,
}
