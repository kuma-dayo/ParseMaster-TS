import { EnumDefault } from "."

enum types {
  CARD_NUMERICAL_DEFAULT_MODE = 0,
  CARD_NUMERICAL_BASE = 1,
  CARD_NUMERICAL_PERCENTAGE = 2,
}

export const ChessCardNumericalModificationMode: EnumDefault = {
  __signed: true,
  types: types,
}
