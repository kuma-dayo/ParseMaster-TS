import { EnumDefault } from "."

enum types {
  COMBAT_END_NONE = 0,
  COMBAT_END_TOWER_HALF_LEVEL_END = 1,
  COMBAT_END_TOWER_LEVEL_END = 2,
  COMBAT_END_DUNGEON_SETTLE = 3,
  COMBAT_END_CRYSTAL_LINK_HALF_LEVEL_END = 4,
  COMBAT_END_COUNT = 5,
}

export const CombatEndType: EnumDefault = {
  __signed: true,
  types: types,
}