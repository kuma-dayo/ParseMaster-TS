import { EnumDefault } from "."

enum types {
  SUBCHALLENGE_BANNER_TYPE_NONE = 0,
  SUBCHALLENGE_BANNER_TYPE_SUCCESS = 1,
  SUBCHALLENGE_BANNER_TYPE_FAIL = 2,
  SUBCHALLENGE_BANNER_TYPE_SHOW_FINAL = 3,
  SUBCHALLENGE_BANNER_TYPE_HIDE_FINAL = 4,
}

export const SubChallengeBannerType: EnumDefault = {
  __signed: true,
  types: types,
}
