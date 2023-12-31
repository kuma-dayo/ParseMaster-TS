//Auto Generated by ConfigParser

import { EnumDefault } from "."

enum types {
  BARTENDER_ORIGIN_CUP_ONTABLE = 0,
  BARTENDER_ORIGIN_CUP_ONHAND = 1,
  BARTENDER_MIX_BAR = 2,
  BARTENDER_INGREDIENTS = 3,
  BARTENDER_INGREDIENTS_POUR_EFF = 4,
  BARTENDER_FINISH_CUP_ONHAND = 5,
  BARTENDER_FINISH_CUP_ONTABLE = 6,
  BARTENDER_FINISH_CUP_PUSH = 7,
  BARTENDER_FINISH_CUP_OVER = 8,
  BARTENDER_FINISH_POUR_EFF = 9,
  BARTENDER_FINISH_CUP_EFF = 10,
}

export const BartenderEffectType: EnumDefault = {
  __signed: true,
  types: types,
}
