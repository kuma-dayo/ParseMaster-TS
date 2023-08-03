import { EnumDefault } from "."

enum types {
  MP_PLAY_SETTLE_TYPE_NONE = 0,
  MP_PLAY_SETTLE_TYPE_WATCHER_FINISH = 1,
  MP_PLAY_SETTLE_TYPE_WATCHER_PROGRESS = 2,
  MP_PLAY_SETTLE_TYPE_MONSTER_TAKE_DEMAGE = 3,
  MP_PLAY_SETTLE_TYPE_MONSTER_KILL_NUM = 4,
  MP_PLAY_SETTLE_TYPE_MONSTER_KILLER = 5,
}

export const MpPlayerSettleType: EnumDefault = {
  __signed: true,
  types: types,
}
