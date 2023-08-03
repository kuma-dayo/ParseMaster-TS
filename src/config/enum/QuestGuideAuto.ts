import { EnumDefault } from "."

enum types {
  QUEST_GUIDE_AUTO_NONE = 0,
  QUEST_GUIDE_AUTO_ENABLE = 1,
  QUEST_GUIDE_AUTO_DISABLE = 2,
}

export const QuestGuideAuto: EnumDefault = {
  __signed: true,
  types: types,
}
