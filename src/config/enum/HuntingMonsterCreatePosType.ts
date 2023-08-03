import { EnumDefault } from "."

enum types {
  HUNTING_POS_NONE = 0,
  HUNTING_POS_GROUND = 1,
  HUNTING_POS_SHOAL_WATER = 2,
  HUNTING_POS_SNOW_MOUNTAIN = 3,
}

export const HuntingMonsterCreatePosType: EnumDefault = {
  __signed: true,
  types: types,
}
