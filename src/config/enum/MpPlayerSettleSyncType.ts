import { EnumDefault } from "."

enum types {
  MP_PLAY_SETTLE_SYNC_TYPE_NONE = 0,
  MP_PLAY_SETTLE_SYNC_TYPE_WATCHER_PROGRESS = 1,
  MP_PLAY_SETTLE_SYNC_TYPE_MP_GROUP_VARIABLE = 2,
  MP_PLAY_SETTLE_SYNC_TYPE_STATISTIC_VALUE = 3,
}

export const MpPlayerSettleSyncType: EnumDefault = {
  __signed: true,
  types: types,
}
