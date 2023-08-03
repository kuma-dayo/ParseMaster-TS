import { EnumDefault } from "."

enum types {
  DUNGEON_STATE_NONE = 0,
  DUNGEON_STATE_RELEASE = 1,
  DUNGEON_STATE_TEST = 2,
}

export const DungeonStateType: EnumDefault = {
  __signed: true,
  types: types,
}
