import { EnumDefault } from "."

enum types {
  CHESS_CARDFORTUNE_BAD = 0,
  CHESS_CARDFORTUNE_NORMAL = 1,
  CHESS_CARDFORTUNE_GOOD = 2,
  CHESS_CARDFORTUNE_VERYGOOD = 3,
  CHESS_CARDFORTUNE_PERFECT = 4,
}

export const CardFortuneType: EnumDefault = {
  __signed: true,
  types: types,
}
