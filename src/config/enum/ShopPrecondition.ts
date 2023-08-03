import { EnumDefault } from "."

enum types {
  SHOP_PRECONDITION_NONE = 0,
  SHOP_PRECONDITION_SPECIFY = 1,
  SHOP_PRECONDITION_REST = 2,
  SHOP_PRECONDITION_SHEET_REST = 3,
  SHOP_PRECONDITION_SHEET_TEASURE_MAP_REGION = 4,
  SHOP_PRECONDITION_HOME_LEVEL = 5,
  SHOP_PRECONDITION_QUEST_FINISH = 6,
  SHOP_PRECONDITION_SHEET_FLEUR_FAIR_WATCHER_FINISH = 7,
  SHOP_PRECONDITION_QUEST_FINISH_ALL = 8,
  SHOP_PRECONDITION_QUEST_FINISH_ANY = 9,
  SHOP_PRECONDITION_GCG_LEVEL = 10,
  SHOP_PRECONDITION_GCG_CARD_PROFICIENCY = 11,
  SHOP_PRECONDITION_GCG_HAS_CARD = 12,
  SHOP_PRECONDITION_GCGTC_NLEVEL_FINISHED = 13,
  SHOP_PRECONDITION_GCGTC_HLEVEL_FINISHED = 14,
  SHOP_PRECONDITION_GCGBC_NLEVEL_FINISHED = 15,
  SHOP_PRECONDITION_GCGBC_HLEVEL_FINISHED = 16,
  SHOP_PRECONDITION_DONE_TEASURE_SEELIE_REGION = 17,
  SHOP_PRECONDITION_GCG_LEVEL_CHALLENGE_FINISHED = 18,
}

export const ShopPrecondition: EnumDefault = {
  __signed: true,
  types: types,
}
