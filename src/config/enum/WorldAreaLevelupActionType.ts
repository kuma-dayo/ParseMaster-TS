import { EnumDefault } from "."

enum types {
  WORLD_AREA_ACTION_NONE = 0,
  WORLD_AREA_ACTION_REWARD = 1,
  WORLD_AREA_ACTION_IMPROVE_STAMINA = 2,
  WORLD_AREA_ACTION_UNLOCK_FORCE = 3,
  WORLD_AREA_ACTION_UNLOCK_DUNGEON_ENTRANCE = 4,
  WORLD_AREA_ACTION_ACTIVATE_ITEM = 5,
  WORLD_AREA_ACTION_UNLOCK_DYNAMIC_HARD = 6,
  WORLD_AREA_ACTION_UNLOCK_AIR_PORTAL = 7,
  WORLD_AREA_ACTION_NOTIFY_GROUP = 8,
}

export const WorldAreaLevelupActionType: EnumDefault = {
  __signed: true,
  types: types,
}