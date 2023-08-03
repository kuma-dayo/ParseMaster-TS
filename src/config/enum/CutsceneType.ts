import { EnumDefault } from "."

enum types {
  NONE = 0,
  TIME_LINE_ASSET = 1,
  TIME_LINE_PREFAB = 2,
  TIME_LINE_SCENE = 3,
  Other = 4,
}

export const CutsceneType: EnumDefault = {
  __signed: true,
  types: types,
}