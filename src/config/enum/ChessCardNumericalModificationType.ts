import { EnumDefault } from "."

enum types {
  CARD_NUMERICAL_DEFAULT_TYPE = 0,
  CARD_NUMERICAL_ATTACK = 1,
  CARD_NUMERICAL_MASTERY = 2,
  CARD_NUMERICAL_ATTACK_INTERVAL = 3,
  CARD_NUMERICAL_ATTACK_RANGE = 4,
}

export const ChessCardNumericalModificationType: EnumDefault = {
  __signed: true,
  types: types,
}
