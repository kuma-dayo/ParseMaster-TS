import { EnumDefault } from "."

enum types {
  ACTIVITY_BANNER_DEFAULT = 0,
  ACTIVITY_BANNER_MONSTER = 1,
  ACTIVITY_BANNER_CHAPTER = 2,
}

export const ActivityBannerType: EnumDefault = {
  __signed: true,
  types: types,
}
