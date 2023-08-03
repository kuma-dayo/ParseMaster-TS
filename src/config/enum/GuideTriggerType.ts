import { EnumDefault } from "."

enum types {
  PLAYER_LEVEL = 0,
  ANY_AVATAR_LEVEL = 1,
  GET_NEW_ITEM = 2,
  OPENSTATE_CHANGE = 3,
  HAS_AVATAR_NUM = 4,
  PERSONALLINE_KEY = 5,
  CLIMATE_TYPE_CHANGE = 6,
  WORLDPLAYER_UPDATE = 7,
  PUSHTIPS_NOTIFY_FINISH = 8,
  NEW_PUSHTIPS = 9,
}

export const GuideTriggerType: EnumDefault = {
  __signed: true,
  types: types,
}
