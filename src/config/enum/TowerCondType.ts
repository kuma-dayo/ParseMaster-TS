import { EnumDefault } from "."

enum types {
  TOWER_COND_NONE = 0,
  TOWER_COND_FINISH_TIME_LESS_THAN = 1,
  TOWER_COND_LEFT_HP_GREATER_THAN = 2,
  TOWER_COND_CHALLENGE_LEFT_TIME_MORE_THAN = 3,
}

export const TowerCondType: EnumDefault = {
  __signed: true,
  types: types,
}
