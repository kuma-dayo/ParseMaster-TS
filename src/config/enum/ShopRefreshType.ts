import { EnumDefault } from "."

enum types {
  SHOP_REFRESH_NONE = 0,
  SHOP_REFRESH_MONTHLY = 1,
  SHOP_REFRESH_WEEKLY = 2,
  SHOP_REFRESH_DAILY = 3,
}

export const ShopRefreshType: EnumDefault = {
  __signed: true,
  types: types,
}
