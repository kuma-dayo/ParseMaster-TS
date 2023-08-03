import { EnumDefault } from "."

enum types {
  MIST_TRIAL_SYNC_NONE = 0,
  MIST_TRIAL_SYNC_PROGRESS = 1,
  MIST_TRIAL_SYNC_STAT_VALUE = 2,
  MIST_TRIAL_SYNC_CHALLENGE_LEFT_TIME = 3,
}

export const MistTrialClientSyncType: EnumDefault = {
  __signed: true,
  types: types,
}
