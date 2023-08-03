import { EnumDefault } from "."

enum types {
  SHOW_TYPE_NONE = 0,
  SHOW_TYPE_WIND = 1,
  SHOW_TYPE_WIND_TIME = 2,
  SHOW_TYPE_COIN = 3,
  SHOW_TYPE_DEFEAT_MONSTER = 4,
  SHOW_TYPE_TATAKAI = 5,
  SHOW_TYPE_GOAL = 6,
  SHOW_TYPE_WIND_PROGRESS = 7,
}

export const ActivityWindFieldShowType: EnumDefault = {
  __signed: true,
  types: types,
}
