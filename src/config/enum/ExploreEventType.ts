import { EnumDefault } from "."

enum types {
  EXPLORE_EVENT_NONE = 0,
  EXPLORE_EVENT_UNLOCK_POINT = 1,
  EXPLORE_EVENT_OPEN_CHEST = 2,
  EXPLORE_EVENT_CLEAR_GROUP_MONSTER = 3,
  EXPLORE_EVENT_ITEM_ADD = 4,
  EXPLORE_EVENT_ENTER_FORCE = 5,
  EXPLORE_EVENT_OPEN_CHEST_BY_GADGET = 6,
  EXPLORE_EVENT_GATHER = 7,
}

export const ExploreEventType: EnumDefault = {
  __signed: true,
  types: types,
}
