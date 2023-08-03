import { EnumDefault } from "."

enum types {
  SUBCHALLENGE_FADEOUT_TYPE_NONE = 0,
  SUBCHALLENGE_FADEOUT_TYPE_SUCCESS = 1,
  SUBCHALLENGE_FADEOUT_TYPE_FAIL = 2,
  SUBCHALLENGE_FADEOUT_TYPE_FINISH = 3,
}

export const SubChallengeFadeOutType: EnumDefault = {
  __signed: true,
  types: types,
}
