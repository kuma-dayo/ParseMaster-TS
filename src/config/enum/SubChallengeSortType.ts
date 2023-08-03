import { EnumDefault } from "."

enum types {
  SUB_CHALLENGE_SORT_TYPE_DEFAULT = 0,
  SUB_CHALLENGE_SORT_TYPE_CHALLENGEINDEX = 1,
}

export const SubChallengeSortType: EnumDefault = {
  __signed: true,
  types: types,
}
