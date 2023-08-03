import { EnumDefault } from "."

enum types {
  REPUTATION_ENTRANCE_NONE = 0,
  REPUTATION_ENTRANCE_QUEST = 1,
  REPUTATION_ENTRANCE_REQUEST = 2,
  REPUTATION_ENTRANCE_EXPLORE = 3,
  REPUTATION_ENTRANCE_HUNTER = 4,
}

export const ReputationEntranceType: EnumDefault = {
  __signed: true,
  types: types,
}