import { EnumDefault } from "."

enum types {
  IRODORI_CARD_NUMERICAL_DEFAULT_MODE = 0,
  IRODORI_CARD_NUMERICAL_BASE = 1,
  IRODORI_CARD_NUMERICAL_PERCENTAGE = 2,
}

export const IrodoriChessCardNumericalModificationMode: EnumDefault = {
  __signed: true,
  types: types,
}
