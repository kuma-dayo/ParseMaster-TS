import { EnumDefault } from "."

enum types {
  HUNTING_GROUP_TYPE_NONE = 0,
  HUNTING_GROUP_TYPE_CLUE = 1,
  HUNTING_GROUP_TYPE_ASSOCIATED = 2,
}

export const HuntingMonsterGroupType: EnumDefault = {
  __signed: true,
  types: types,
}
