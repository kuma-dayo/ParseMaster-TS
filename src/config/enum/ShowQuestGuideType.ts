import { EnumDefault } from "."

enum types {
  QUEST_GUIDE_ITEM_ENABLE = 0,
  QUEST_GUIDE_ITEM_DISABLE = 1,
  QUEST_GUIDE_ITEM_MOVE_HIDE = 2,
}

export const ShowQuestGuideType: EnumDefault = {
  __signed: true,
  types: types,
}
