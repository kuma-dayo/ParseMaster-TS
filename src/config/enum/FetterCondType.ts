//Auto Generated by ConfigParser

import { EnumDefault } from "."

enum types {
  FETTER_COND_NONE = 0,
  FETTER_COND_FETTER_LEVEL = 1,
  FETTER_COND_AVATAR_LEVEL = 2,
  FETTER_COND_FINISH_DUNGEON = 3,
  FETTER_COND_UNLOCK_TRANS_POINT = 4,
  FETTER_COND_UNLOCK_AREA = 5,
  FETTER_COND_FINISH_QUEST = 6,
  FETTER_COND_AVATAR_PROMOTE_LEVEL = 7,
  FETTER_COND_PLAYER_BIRTHDAY = 8,
  FETTER_COND_AVATAR_BIRTHDAY = 9,
  FETTER_COND_NOT_OPEN = 10,
  FETTER_COND_FINISH_PARENT_QUEST = 11,
  FETTER_COND_UNLOCK_ARENA_BY_CITY_ID = 12,
}

export const FetterCondType: EnumDefault = {
  __signed: true,
  types: types,
}
