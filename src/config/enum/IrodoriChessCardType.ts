import { EnumDefault } from "."

enum types {
  IRODORI_CHESS_CARD_MECHANISM = 0,
  IRODORI_CHESS_CARD_STRENGTHEN = 1,
}

export const IrodoriChessCardType: EnumDefault = {
  __signed: true,
  types: types,
}
