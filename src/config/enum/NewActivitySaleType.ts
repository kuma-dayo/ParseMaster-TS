import { EnumDefault } from "."

enum types {
  NEW_ACTIVITY_SALE_TYPE_NONE = 0,
  NEW_ACTIVITY_SALE_TYPE_WEAPON_UPGRADE = 1,
}

export const NewActivitySaleType: EnumDefault = {
  __signed: true,
  types: types,
}
