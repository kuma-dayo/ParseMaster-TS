import { EnumDefault } from "."

enum types {
  ITEM_NONE = 0,
  ITEM_VIRTUAL = 1,
  ITEM_MATERIAL = 2,
  ITEM_RELIQUARY = 3,
  ITEM_WEAPON = 4,
  ITEM_DISPLAY = 5,
  ITEM_FURNITURE = 6,
}

export const ItemType: EnumDefault = {
  __signed: true,
  types: types,
}
