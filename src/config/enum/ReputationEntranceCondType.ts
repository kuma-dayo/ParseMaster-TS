import { EnumDefault } from "."

enum types {
  REPUTATION_ENTRANCE_COND_NONE = 0,
  REPUTATION_ENTRANCE_COND_REPUTATION_LEVEL = 1,
  REPUTATION_ENTRANCE_COND_PLAYER_LEVEL = 2,
  REPUTATION_ENTRANCE_COND_QUEST = 3,
}

export const ReputationEntranceCondType: EnumDefault = {
  __signed: true,
  types: types,
}
