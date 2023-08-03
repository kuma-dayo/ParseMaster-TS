import { EnumDefault } from "."

enum types {
  IRODORI_CARD_NUMERICAL_DEFAULT_TYPE = 0,
  IRODORI_CARD_NUMERICAL_ATTACK = 1,
  IRODORI_CARD_NUMERICAL_MASTERY = 2,
  IRODORI_CARD_NUMERICAL_ATTACK_INTERVAL = 3,
  IRODORI_CARD_NUMERICAL_ATTACK_RANGE = 4,
}

export const IrodoriChessCardNumericalModificationType: EnumDefault = {
  __signed: true,
  types: types,
}
