import { EnumDefault } from "."

enum types {
  CARD_PRODUCT_TYPE_INVALID = 0,
  CARD_PRODUCT_TYPE_HCOIN = 1,
  CARD_PRODUCT_TYPE_RESIN = 2,
}

export const CardProductType: EnumDefault = {
  __signed: true,
  types: types,
}
