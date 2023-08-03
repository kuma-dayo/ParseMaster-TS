import { EnumDefault } from "."

enum types {
  TARGET_TYPE_NONE = 0,
  TARGET_TYPE_GATHER = 1,
  TARGET_TYPE_ELEM = 2,
  TARGET_TYPE_MONSTER = 3,
}

export const ActivityGachaTargetType: EnumDefault = {
  __signed: true,
  types: types,
}
