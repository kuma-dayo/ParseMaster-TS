import { EnumDefault } from "."

enum types {
  ACTIVITY_SHOP_SHEET_COND_NONE = 0,
  ACTIVITY_SHOP_SHEET_COND_QUEST_FINISH = 1,
  ACTIVITY_SHOP_SHEET_COND_TIME_EQUAL_GREATER = 2,
  ACTIVITY_SHOP_SHEET_COND_SEA_LAMP_PHASE = 3,
}

export const ActivityShopSheetCondType: EnumDefault = {
  __signed: true,
  types: types,
}
