import { EnumDefault } from "."

enum types {
  QUEST_STATE_NONE = 0,
  QUEST_STATE_UNSTARTED = 1,
  QUEST_STATE_UNFINISHED = 2,
  QUEST_STATE_FINISHED = 3,
  QUEST_STATE_FAILED = 4,
}

export const QuestState: EnumDefault = {
  __signed: true,
  types: types,
}
