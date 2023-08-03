import { EnumDefault } from "."

enum types {
  FISH_STOCK_TYPE_NONE = 0,
  FISH_STOCK_TYPE_ANY = 1,
  FISH_STOCK_TYPE_DAY = 2,
  FISH_STOCK_TYPE_NIGHT = 3,
}

export const FishStockType: EnumDefault = {
  __signed: true,
  types: types,
}
