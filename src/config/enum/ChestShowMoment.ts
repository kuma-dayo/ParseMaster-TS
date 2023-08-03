import { EnumDefault } from "."

enum types {
  None = 0,
  OnCreate = 1,
  OnUnlock = 2,
}

export const ChestShowMoment: EnumDefault = {
  __signed: true,
  types: types,
}
