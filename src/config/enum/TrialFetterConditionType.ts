import { EnumDefault } from "."

enum types {
  TRIAL_FETTER_CONDITION_COMPLETE_SUB_MISSION = 0,
  TRIAL_FETTER_CONDITION_LEVEL = 1,
}

export const TrialFetterConditionType: EnumDefault = {
  __signed: true,
  types: types,
}
