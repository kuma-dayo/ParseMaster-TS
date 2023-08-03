import { EnumDefault } from "."

enum types {
  MP_PLAY_NONE = 0,
  MP_PLAY_CRUCIBLE = 1,
  MP_PLAY_ASTER = 2,
  MP_PLAY_DRAGON_SPINE = 3,
  MP_PLAY_WATER_SPRITE = 4,
  MP_PLAY_WINTER_CAMP = 5,
}

export const MpPlayType: EnumDefault = {
  __signed: true,
  types: types,
}
