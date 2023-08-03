import { EnumDefault } from "."

enum types {
  COOP_COND_NONE = 0,
  COOP_COND_FINISH_QUEST = 1,
  COOP_COND_PLAYER_LEVEL = 2,
  COOP_COND_COOP_POINT_FINISH = 3,
  COOP_COND_AVATAR_FETTER_LEVEL = 4,
  COOP_COND_CHAPTER_END_ALL_FINISH = 5,
  COOP_COND_CHAPTER_END_FINISH_COUNT = 6,
}

export const CoopTaskCondType: EnumDefault = {
  __signed: true,
  types: types,
}
