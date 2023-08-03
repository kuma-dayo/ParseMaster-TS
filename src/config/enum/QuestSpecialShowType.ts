import { EnumDefault } from "."

enum types {
  SPECIAL_SHOW_NONE = 0,
  SPECIAL_SHOW_FINISH = 1,
  SPECIAL_SHOW_GLOBAL_VALUE_EQUAL_TO = 2,
}

export const QuestSpecialShowType: EnumDefault = {
  __signed: true,
  types: types,
}
