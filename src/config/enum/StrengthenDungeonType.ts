import { EnumDefault } from "."

enum types {
  DUNGEON_TYPE_NONE = 0,
  DUNGEON_TYPE_BOSS = 1,
  DUNGEON_TYPE_BREAK = 2,
  DUNGEON_TYPE_NORMAL = 3,
  DUNGEON_TYPE_DAILY = 4,
  DUNGEON_TYPE_TOWER = 5,
  DUNGEON_TYPE_EFFIGY = 6,
}

export const StrengthenDungeonType: EnumDefault = {
  __signed: true,
  types: types,
}
