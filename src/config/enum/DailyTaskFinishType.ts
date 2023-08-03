import { EnumDefault } from "."

enum types {
  DAILY_FINISH_NONE = 0,
  DAILY_FINISH_MONSTER_ID_NUM = 1,
  DAILY_FINISH_GADGET_ID_NUM = 2,
  DAILY_FINISH_MONSTER_CONFIG_NUM = 3,
  DAILY_FINISH_GADGET_CONFIG_NUM = 4,
  DAILY_FINISH_MONSTER_NUM = 5,
  DAILY_FINISH_CHEST_CONFIG = 6,
  DAILY_FINISH_GATHER = 7,
  DAILY_FINISH_CHALLENGE = 8,
}

export const DailyTaskFinishType: EnumDefault = {
  __signed: true,
  types: types,
}
