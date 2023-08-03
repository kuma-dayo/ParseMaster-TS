import { EnumDefault } from "."

enum types {
  EFFIGY_CONDITION_NONE = 0,
  EFFIGY_CONDITION_TIME_LIMIT = 1,
  EFFIGY_CONDITION_LEVEL_CONFIG = 2,
  EFFIGY_CONDITION_MONSTER_CONFIG = 3,
}

export const EffigyCondition: EnumDefault = {
  __signed: true,
  types: types,
}
