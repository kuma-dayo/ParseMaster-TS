import { EnumDefault } from "."

enum types {
  ROGUE_DIARY_TIRED_NONE = 0,
  ROGUE_DIARY_TIRED_SELECT = 1,
  ROGUE_DIARY_TIRED_RANDOM = 2,
  ROGUE_DIARY_TIRED_ALL = 3,
}

export const RogueDiaryTiredType: EnumDefault = {
  __signed: true,
  types: types,
}
