import { EnumDefault } from "."

enum types {
  Default = 0,
  Slash = 1,
  Blunt = 2,
  Pierce = 3,
  Spear = 4,
  None = 5,
}

export const StrikeType: EnumDefault = {
  __signed: true,
  types: types,
}
