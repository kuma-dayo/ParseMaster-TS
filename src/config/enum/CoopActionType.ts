//Auto Generated by ConfigParser

import { EnumDefault } from "."

enum types {
  COOP_ACTION_NONE = 0,
  COOP_ACTION_TEMPERAMENT_ADD = 1,
  COOP_ACTION_TEMPERAMENT_MINUS = 2,
  COOP_ACTION_CONFIDENCE_ADD = 3,
  COOP_ACTION_CONFIDENCE_MINUS = 4,
  COOP_ACTION_TEMP_VALUE_SET = 5,
  COOP_ACTION_SELECT_TEMPERAMENT_SET = 6,
  COOP_ACTION_TEMP_VALUE_ADD = 7,
  COOP_ACTION_TEMP_VALUE_MINUS = 8,
}

export const CoopActionType: EnumDefault = {
  __signed: true,
  types: types,
}
