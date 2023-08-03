import { EnumDefault } from "."

enum types {
  TAB_NONE = 0,
  TAB_WEAPON = 1,
  TAB_EQUIP = 2,
  TAB_AVATAR = 3,
  TAB_FOOD = 4,
  TAB_MATERIAL = 5,
  TAB_QUEST = 6,
  TAB_CONSUME = 7,
  TAB_WIDGET = 8,
  TAB_HOMEWORLD = 9,
}

export const BagTab: EnumDefault = {
  __signed: true,
  types: types,
}
