import { EnumDefault } from "."

enum types {
  ABILITY_GROUP_SOURCE_NONE = 0,
  ABILITY_GROUP_SOURCE_CHALLENGE = 1,
  ABILITY_GROUP_SOURCE_QUEST = 2,
  ABILITY_GROUP_SOURCE_ACTIVITY = 3,
  ABILITY_GROUP_SOURCE_HUNTING = 4,
  ABILITY_GROUP_SOURCE_WATCHER = 5,
  ABILITY_GROUP_SOURCE_AVATAR_SKILL_DEPOT = 6,
  ABILITY_GROUP_SOURCE_GALLERY = 7,
  ABILITY_GROUP_SOURCE_WIDGET = 8,
  ABILITY_GROUP_SOURCE_FISHING = 9,
}

export const AbilityGroupSourceType: EnumDefault = {
  __signed: true,
  types: types,
}