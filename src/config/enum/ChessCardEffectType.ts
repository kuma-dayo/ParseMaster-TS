import { EnumDefault } from "."

enum types {
  CHESS_CARD_EFFECT_DEFAULT = 0,
  CHESS_CARD_EFFECT_SET_SGV = 1,
  CHESS_CARD_EFFECT_MOD_COST = 2,
  CHESS_CARD_EFFECT_MOD_REFUND = 3,
  CHESS_CARD_EFFECT_SET_HOME_HP = 4,
  CHESS_CARD_EFFECT_ADD_HOME_HP = 5,
  CHESS_CARD_EFFECT_ADD_KILL_POINTS = 6,
  CHESS_CARD_EFFECT_MOD_KILL_POINTS = 7,
  CHESS_CARD_EFFECT_ADD_GEAR_NUM = 8,
  CHESS_CARD_EFFECT_KILL_GEARS = 9,
  CHESS_CARD_EFFECT_GRANT_POINTS = 10,
  CHESS_PASSIVE_AURA_BONUS_POINTS = 11,
  CHESS_PASSIVE_AURA_SGV = 12,
  CHESS_CARD_EFFECT_RANDOM_REMOVE = 13,
  CHESS_CARD_EFFECT_POINTS_ON_ROUND_END = 14,
  CHESS_CARD_EFFECT_SGV_PICK_CARD_LTE = 15,
  CHESS_CARD_EFFECT_MOD_CARD_COST = 16,
  CHESS_CARD_EFFECT_CARDS_TYPE_COUNT_NO_COST = 17,
  CHESS_CARD_EFFECT_MOD_CANDIDATE_CARDS = 18,
  CHESS_CARD_EFFECT_MOD_QUALITY_PROB = 19,
  CHESS_CARD_EFFECT_FREE_CARD_REFRESH = 20,
  CHESS_CARD_EFFECT_MOD_REFRESH_COST = 21,
  CHESS_CARD_EFFECT_CARDS_COUNT_STACK_SGV = 22,
  CHESS_CARD_EFFECT_POINTS_STACK_SGV = 23,
  CHESS_CARD_EFFECT_CARD_TYPE_STACK_SGV = 24,
  CHESS_CARD_EFFECT_CARD_TYPE_FORCE_CURSE = 25,
}

export const ChessCardEffectType: EnumDefault = {
  __signed: true,
  types: types,
}
