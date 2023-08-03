import { EnumDefault } from "."

enum types {
  COOP_COND_NONE = 0,
  COOP_COND_TEMPERAMENT_COMPARE = 1,
  COOP_COND_CONFIDENCE_COMPARE = 2,
  COOP_COND_ENDING_FINISH = 3,
  COOP_COND_QUEST_FINISH = 4,
  COOP_COND_ITEM_NUM_COMPARE = 5,
  COOP_COND_PLAYER_LEVEL_COMPARE = 6,
  COOP_COND_FETTER_COMPARE = 7,
  COOP_COND_TEMP_VALUE_COMPARE = 8,
}

export const CoopCondType: EnumDefault = {
  __signed: true,
  types: types,
}