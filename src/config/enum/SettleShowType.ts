import { EnumDefault } from "."

enum types {
  SETTLE_SHOW_NONE = 0,
  SETTLE_SHOW_TIME_COST = 1,
  SETTLE_SHOW_OPEN_CHEST_COUNT = 2,
  SETTLE_SHOW_KILL_MONSTER_COUNT = 3,
  SETTLE_SHOW_BLACKSCREEN = 4,
}

export const SettleShowType: EnumDefault = {
  __signed: true,
  types: types,
}
