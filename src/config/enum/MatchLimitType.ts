import { EnumDefault } from "."

enum types {
  MATCH_LIMIT_TYPE_NONE = 0,
  MATCH_LIMIT_TYPE_MAP_UNLOCK = 1,
  MATCH_LIMIT_TYPE_QUEST_FINISH = 2,
}

export const MatchLimitType: EnumDefault = {
  __signed: true,
  types: types,
}
