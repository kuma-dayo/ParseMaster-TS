import { EnumDefault } from "."

enum types {
  Grade = 0,
  Literally = 1,
  TextMap = 2,
}

export const SettingEntryDisplayType: EnumDefault = {
  __signed: true,
  types: types,
}
