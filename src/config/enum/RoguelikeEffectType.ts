import { EnumDefault } from "."

enum types {
  ROGUELIKE_EFFECT_NONE = 0,
  ROGUELIKE_EFFECT_STATIC_COMBAT = 1,
  ROGUELIKE_EFFECT_DYNAMIC_COMBAT = 2,
  ROGUELIKE_EFFECT_DISABLE_SPRING_CELL = 3,
  ROGUELIKE_EFFECT_ADD_TALENT = 4,
  ROGUELIKE_EFFECT_ADD_LEVEL_TRAP = 5,
  ROGUELIKE_EFFECT_CLEAR_LEVEL_TRAP = 6,
  ROGUELIKE_EFFECT_RANDOM_CLEAR_A_CURSE = 7,
  ROGUELIKE_EFFECT_CLEAR_ALL_CURSE = 8,
  ROGUELIKE_EFFECT_ADD_RUNE_MAX_COUNT = 9,
  ROGUELIKE_EFFECT_ADD_RUNE_USE_COUNT = 10,
  ROGUELIKE_EFFECT_FILL_RUNE_USE_COUNT = 11,
  ROGUELIKE_EFFECT_USE_RUNE_PROB_NOT_SUB = 12,
  ROGUELIKE_EFFECT_CLEAR_MIST = 13,
  ROGUELIKE_EFFECT_ADD_RESOURCE = 14,
  ROGUELIKE_EFFECT_RANDOM_AVATAR_NOHEAL = 15,
  ROGUELIKE_EFFECT_ADD_CARD_TYPE_WEIGHT = 16,
  ROGUELIKE_EFFECT_SUB_REFRESH_CARD_COST = 17,
  ROGUELIKE_EFFECT_CHANGE_GADGET_NUM = 18,
  ROGUELIKE_EFFECT_SUB_CURSE_PROB = 19,
  ROGUELIKE_EFFECT_PROB_FREE_REFRESH_CARD = 20,
  ROGUELIKE_EFFECT_ADD_CARD_TYPE_WEIGHT_ROOM_FIRST = 21,
  ROGUELIKE_EFFECT_AT_MOST_TRAP_COUNT = 22,
  ROGUELIKE_EFFECT_SPRING_AND_BOSS = 23,
  ROGUELIKE_EFFECT_AT_LEAST_STORE_COUNT = 24,
  ROGUELIKE_EFFECT_BAN_GUARD = 25,
}

export const RoguelikeEffectType: EnumDefault = {
  __signed: true,
  types: types,
}
