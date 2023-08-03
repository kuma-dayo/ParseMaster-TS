import { EnumDefault } from "."

enum types {
  ELEC = 0,
  FIRE = 1,
  GRASS = 2,
  ICE = 3,
  ROCK = 4,
  WATER = 5,
  WIND = 6,
}

export const RewardResourceType: EnumDefault = {
  __signed: true,
  types: types,
}
