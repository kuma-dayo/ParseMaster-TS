import { EnumDefault } from "."

enum types {
  GCG_LEVEL_UNLOCK_NONE = 0,
  GCG_LEVEL_UNLOCK_LEVEL = 1,
  GCG_LEVEL_UNLOCK_QUEST = 2,
}

export const GCGLevelUnlockType: EnumDefault = {
  __signed: true,
  types: types,
}
