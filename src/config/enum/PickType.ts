import { EnumDefault } from "."

enum types {
  None = 0,
  Monster = 1,
  Auto = 2,
  Select = 3,
  Attract = 4,
  AutoSelect = 5,
  GroupAuto = 6,
}

export const PickType: EnumDefault = {
  __signed: true,
  types: types,
}
