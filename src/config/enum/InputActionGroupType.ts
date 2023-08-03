import { EnumDefault } from "."

enum types {
  All = 0,
  Gameplay = 1,
  Menu = 2,
}

export const InputActionGroupType: EnumDefault = {
  __signed: true,
  types: types,
}
