import { EnumDefault } from "."

enum types {
  SCENE_SUB_TYPE_NONE = 0,
  SCENE_SUB_TYPE_PERSISTENT_DUNGEON = 1,
}

export const SceneSubType: EnumDefault = {
  __signed: true,
  types: types,
}
