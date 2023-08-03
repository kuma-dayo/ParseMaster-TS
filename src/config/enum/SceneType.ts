import { EnumDefault } from "."

enum types {
  SCENE_NONE = 0,
  SCENE_WORLD = 1,
  SCENE_DUNGEON = 2,
  SCENE_ROOM = 3,
  SCENE_HOME_WORLD = 4,
  SCENE_HOME_ROOM = 5,
  SCENE_ACTIVITY = 6,
}

export const SceneType: EnumDefault = {
  __signed: true,
  types: types,
}