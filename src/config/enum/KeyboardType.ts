import { EnumDefault } from "."

enum types {
  Invalid = 0,
  EN = 1033,
  FR = 1036,
  DE = 1031,
}

export const KeyboardType: EnumDefault = {
  __signed: true,
  types: types,
}
