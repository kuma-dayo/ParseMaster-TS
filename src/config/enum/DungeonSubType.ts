import { EnumDefault } from "."

enum types {
  DUNGEON_SUB_NONE = 0,
  DUNGEON_SUB_RELIQUARY = 1,
  DUNGEON_SUB_TALENT = 2,
  DUNGEON_SUB_WEAPON = 3,
  DUNGEON_SUB_BOSS = 4,
}

export const DungeonSubType: EnumDefault = {
  __signed: true,
  types: types,
}
