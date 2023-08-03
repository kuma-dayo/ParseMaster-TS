import { EnumDefault } from "."

enum types {
  RECOMMEND_ONE = 0,
  RECOMMEND_COL = 1,
  RECOMMEND_ITEM = 2,
  RECOMMEND_JUMP = 3,
  RECOMMEND_PACKAGE = 4,
}

export const ShopRecommendTabType: EnumDefault = {
  __signed: true,
  types: types,
}