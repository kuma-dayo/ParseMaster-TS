import { EnumDefault } from "."

enum types {
  None = 0,
  CameraLook = 1,
  Cutscene = 2,
}

export const ChestShowCutsceneType: EnumDefault = {
  __signed: true,
  types: types,
}
