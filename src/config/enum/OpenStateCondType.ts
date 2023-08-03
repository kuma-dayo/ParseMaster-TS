import { EnumDefault } from "."

enum types {
  OPEN_STATE_COND_NONE = 0,
  OPEN_STATE_COND_PLAYER_LEVEL = 1,
  OPEN_STATE_COND_QUEST = 2,
  OPEN_STATE_COND_PARENT_QUEST = 3,
  OPEN_STATE_CITY_REPUTATION_LEVEL = 4,
  OPEN_STATE_OFFERING_LEVEL = 5,
  OPEN_STATE_COND_GCG_LEVEL = 6,
}

export const OpenStateCondType: EnumDefault = {
  __signed: true,
  types: types,
}
