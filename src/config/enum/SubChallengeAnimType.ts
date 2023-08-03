import { EnumDefault } from "."

enum types {
  SUB_CHALLENGE_ANIM_TYPE_DEFAULT = 0,
  SUB_CHALLENGE_ANIM_TYPE_FORBID = 1,
  SUB_CHALLENGE_ANIM_TYPE_SUCCESS = 2,
  SUB_CHALLENGE_ANIM_TYPE_FAIL = 3,
}

export const SubChallengeAnimType: EnumDefault = {
  __signed: true,
  types: types,
}
