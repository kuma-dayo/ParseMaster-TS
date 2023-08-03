import { EnumDefault } from "."

enum types {
  SHIKIGAMI_UNLOCK_NONE = 0,
  SHIKIGAMI_UNLOCK_SHIKIGAMI = 1,
  SHIKIGAMI_UNLOCK_ACTIVITY_DAY = 2,
  SHIKIGAMI_UNLOCK_ROGUELIKE_STAGE = 3,
}

export const RoguelikeShikigamiUnlockType: EnumDefault = {
  __signed: true,
  types: types,
}
