import { EnumDefault } from "."

enum types {
  HOMEWORLD_LIMIT_SHOP_COND_TYPE_NONE = 0,
  HOMEWORLD_LIMIT_SHOP_COND_TYPE_HOME_LEVEL = 1,
  HOMEWORLD_LIMIT_SHOP_COND_TYPE_QUEST_FINISH = 2,
}

export const HomeWorldLimitShopCondType: EnumDefault = {
  __signed: true,
  types: types,
}