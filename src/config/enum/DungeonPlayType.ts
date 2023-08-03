import { EnumDefault } from "."

enum types {
  DUNGEON_PLAY_TYPE_NONE = 0,
  DUNGEON_PLAY_TYPE_FOGGY_MAZE = 1,
  DUNGEON_PLAY_TYPE_TRIAL_AVATAR = 2,
  DUNGEON_PLAY_TYPE_MIST_TRIAL = 3,
}

export const DungeonPlayType: EnumDefault = {
  __signed: true,
  types: types,
}