import { EnumDefault } from "."

enum types {
  CHALLENGE_RECORD_TYPE_NONE = 0,
  CHALLENGE_RECORD_TYPE_IN_TIME = 1,
}

export const ChallengeRecordType: EnumDefault = {
  __signed: true,
  types: types,
}
