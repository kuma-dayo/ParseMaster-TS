import { EnumDefault } from "."

enum types {
  RQ_FILTER_NONE = 0,
  RQ_FILTER_PLAYER_POS_RING = 1,
  RQ_FILTER_NPC = 2,
  RQ_FILTER_PLAYER_LEVEL = 3,
}

export const RandomQuestFilterType: EnumDefault = {
  __signed: true,
  types: types,
}
