import { EnumDefault } from "."

enum types {
  MP_PLAY_SETTLE_NONE = 0,
  MP_PLAY_SETTLE_OLD = 1,
  MP_PLAY_SETTLE_CARD = 2,
}

export const MpPlaySettleType: EnumDefault = {
  __signed: true,
  types: types,
}
