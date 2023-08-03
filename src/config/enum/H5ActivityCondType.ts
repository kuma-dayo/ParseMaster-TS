import { EnumDefault } from "."

enum types {
  H5_ACTIVITY_COND_NONE = 0,
  H5_ACTIVITY_COND_PLAYER_LEVEL = 1,
  H5_ACTIVITY_COND_REGISTER_TIME_GREAT_EQUAL = 2,
  H5_ACTIVITY_COND_DAY_COUNT_GREAT_EQUAL = 3,
}

export const H5ActivityCondType: EnumDefault = {
  __signed: true,
  types: types,
}
