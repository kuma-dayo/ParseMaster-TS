import { EnumDefault } from "."

enum types {
  MAINQUEST_TAG_NONE = 0,
  MAINQUEST_TAG_GUIDE = 1,
  MAINQUEST_TAG_ACTIVITY = 2,
  MAINQUEST_TAG_RANK_ZERO_WQ = 3,
  MAINQUEST_TAG_MAIN_WQ = 4,
}

export const MainQuestTagType: EnumDefault = {
  __signed: true,
  types: types,
}
