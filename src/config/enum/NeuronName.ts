import { EnumDefault } from "."

enum types {
  HIT = 0,
  FEAR = 1,
  HIT_BUDDY = 2,
  ASLEEP = 3,
  AWAKE = 4,
  WEATHER_BAD = 5,
  WEATHER_CLEARSKY = 6,
  WEATHER_CLOUDY = 7,
  WEATHER_FOGGY = 8,
  WEATHER_RAIN = 9,
  WEATHER_SNOW = 10,
  WEATHER_STORM = 11,
  SURROUND = 12,
  HUNGRY = 13,
  BLOCK_AVATAR_LANDING = 14,
  PREACH = 15,
  SUPERVISE = 16,
  TRAIN = 17,
  DANCE = 18,
  MAKE = 19,
  BUILD = 20,
  SEARCH = 21,
  SIT = 22,
  THREAT = 23,
  INVALID = 24,
}

export const NeuronName: EnumDefault = {
  __signed: true,
  types: types,
}
