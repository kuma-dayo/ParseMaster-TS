import { EnumDefault } from "."

enum types {
  MP_PLAY_SHOW_NORMAL = 0,
  MP_PLAY_SHOW_NO_RESIN = 1,
  MP_PLAY_SHOW_TWO_MATERIAL = 2,
}

export const MpPlayShowType: EnumDefault = {
  __signed: true,
  types: types,
}
