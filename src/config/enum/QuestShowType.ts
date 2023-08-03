import { EnumDefault } from "."

enum types {
  QUEST_SHOW = 0,
  QUEST_HIDDEN = 1,
}

export const QuestShowType: EnumDefault = {
  __signed: true,
  types: types,
}
