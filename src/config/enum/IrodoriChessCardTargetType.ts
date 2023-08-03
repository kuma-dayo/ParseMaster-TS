import { EnumDefault } from "."

enum types {
  IRODORI_CHESS_CARD_TARGET_DEFAULT = 0,
  IRODORI_CHESS_CARD_TARGET_ALL = 1,
  IRODORI_CHESS_CARD_TARGET_GADGETS = 2,
}

export const IrodoriChessCardTargetType: EnumDefault = {
  __signed: true,
  types: types,
}
