import { EnumDefault } from "."

enum types {
  QUEST_GUIDE_HINT_NONE = 0,
  QUEST_GUIDE_HINT_READING_DIALOG = 1,
  QUEST_GUIDE_HINT_ARANARA_HANDBOOK_RECORD = 2,
  QUEST_GUIDE_HINT_DESHRET_MANUAL = 3,
}

export const QuestGuideHintType: EnumDefault = {
  __signed: true,
  types: types,
}
