import { EnumDefault } from "."

enum types {
  TALENT_FILTER_NONE = 0,
  TALENT_FILTER_FIRE_AVATAR = 1,
  TALENT_FILTER_ELEC_AVATAR = 2,
  TALENT_FILTER_WATER_AVATAR = 3,
  TALENT_FILTER_GRASS_AVATAR = 4,
  TALENT_FILTER_WIND_AVATAR = 5,
  TALENT_FILTER_ICE_AVATAR = 6,
  TALENT_FILTER_ROCK_AVATAR = 7,
}

export const TalentFilterCond: EnumDefault = {
  __signed: true,
  types: types,
}
