import { EnumDefault } from "."

enum types {
  None = 0,
  Num_Ascend = 1,
  Num_Descend = 2,
}

export const ConfigGraphicSettingEntrySortType: EnumDefault = {
  __signed: true,
  types: types,
}
