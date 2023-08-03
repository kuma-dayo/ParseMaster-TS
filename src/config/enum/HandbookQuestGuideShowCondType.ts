import { EnumDefault } from "."

enum types {
  QUEST_GUIDE_SHOW_COND_NONE = 0,
  QUEST_GUIDE_SHOW_COND_AREA_UNLOCKED = 1,
  QUEST_GUIDE_SHOW_COND_PREQUEST_FINISHED = 2,
  QUEST_GUIDE_SHOW_COND_LEVEL_GT_OR_EQ = 3,
}

export const HandbookQuestGuideShowCondType: EnumDefault = {
  __signed: true,
  types: types,
}
