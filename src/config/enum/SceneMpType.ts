import { EnumDefault } from "."

enum types {
  SCENE_MP_NONE = 0,
  SCENE_MP_SINGLE_PLAYER_SINGLE_MODE = 1,
}

export const SceneMpType: EnumDefault = {
  __signed: true,
  types: types,
}
