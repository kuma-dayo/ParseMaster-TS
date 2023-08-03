import { EnumDefault } from "."

enum types {
  Normal = 0,
  Weapon = 1,
  Relic = 2,
  Any = 3,
  Material = 4,
}

export const GuideItemType: EnumDefault = {
  __signed: true,
  types: types,
}