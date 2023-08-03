import { EnumDefault } from "."

enum types {
  LEVEL_TYPE_NONE = 0,
  LEVEL_TYPE_AMUSEMENT = 1,
  LEVEL_TYPE_FIGHT = 2,
}

export const ActivityCharAmusementLevelType: EnumDefault = {
  __signed: true,
  types: types,
}
