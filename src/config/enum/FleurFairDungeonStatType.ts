import { EnumDefault } from "."

enum types {
  FLEUR_FAIR_DUNGEON_STAT_NONE = 0,
  FLEUR_FAIR_DUNGEON_STAT_GROUP_VARIABLE = 1,
  FLEUR_FAIR_DUNGEON_STAT_MONSTER_HURT = 2,
}

export const FleurFairDungeonStatType: EnumDefault = {
  __signed: true,
  types: types,
}
