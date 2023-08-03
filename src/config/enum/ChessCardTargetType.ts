import { EnumDefault } from "."

enum types {
  CHESS_CARD_TARGET_DEFAULT = 0,
  CHESS_CARD_TARGET_ALL = 1,
  CHESS_CARD_TARGET_GADGETS = 2,
}

export const ChessCardTargetType: EnumDefault = {
  __signed: true,
  types: types,
}
