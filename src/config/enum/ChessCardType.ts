import { EnumDefault } from "."

enum types {
  CHESS_CARD_CURSE = 0,
  CHESS_CARD_MECHANISM = 1,
  CHESS_CARD_CHALLENGE = 2,
  CHESS_CARD_STRENGTHEN = 3,
}

export const ChessCardType: EnumDefault = {
  __signed: true,
  types: types,
}