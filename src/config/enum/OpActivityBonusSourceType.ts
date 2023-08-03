import { EnumDefault } from "."

enum types {
  SOURCE_TYPE_NONE = 0,
  SOURCE_TYPE_BLOSSOM = 1,
  SOURCE_TYPE_DUNGEON = 2,
}

export const OpActivityBonusSourceType: EnumDefault = {
  __signed: true,
  types: types,
}