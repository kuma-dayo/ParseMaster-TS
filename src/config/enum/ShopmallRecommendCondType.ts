import { EnumDefault } from "."

enum types {
  SHOPMALL_RECOMMEND_COND_TYPE_NONE = 0,
  SHOPMALL_RECOMMEND_COND_PLAYER_LEVEL_GE = 1,
  SHOPMALL_RECOMMEND_COND_TIME_BEGIN = 2,
  SHOPMALL_RECOMMEND_COND_TIME_END = 3,
}

export const ShopmallRecommendCondType: EnumDefault = {
  __signed: true,
  types: types,
}
