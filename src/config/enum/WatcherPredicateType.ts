import { EnumDefault } from "."

enum types {
  PREDICATE_NONE = 0,
  PREDICATE_QUEST_FINISH = 1,
  PREDICATE_CURRENT_AVATAR = 2,
  PREDICATE_GCG_LEVEL = 3,
}

export const WatcherPredicateType: EnumDefault = {
  __signed: true,
  types: types,
}
