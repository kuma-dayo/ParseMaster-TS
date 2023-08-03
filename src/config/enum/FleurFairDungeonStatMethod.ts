import { EnumDefault } from "."

enum types {
  FLEUR_FAIR_DUNGEON_STAT_METHOD_NONE = 0,
  FLEUR_FAIR_DUNGEON_STAT_METHOD_MAXIMUM = 1,
  FLEUR_FAIR_DUNGEON_STAT_METHOD_MINIMUM = 2,
}

export const FleurFairDungeonStatMethod: EnumDefault = {
  __signed: true,
  types: types,
}
