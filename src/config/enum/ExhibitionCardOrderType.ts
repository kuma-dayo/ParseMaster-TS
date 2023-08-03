import { EnumDefault } from "."

enum types {
  EXHIBITION_CARD_ORDER_NONE = 0,
  EXHIBITION_CARD_ORDER_LESS_BETTER = 1,
  EXHIBITION_CARD_ORDER_GREATER_BETTER = 2,
}

export const ExhibitionCardOrderType: EnumDefault = {
  __signed: true,
  types: types,
}
