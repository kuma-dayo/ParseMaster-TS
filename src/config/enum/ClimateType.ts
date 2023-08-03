import { EnumDefault } from "."

enum types {
  CLIMATE_NONE = 0,
  CLIMATE_SUNNY = 1,
  CLIMATE_CLOUDY = 2,
  CLIMATE_RAIN = 3,
  CLIMATE_THUNDERSTORM = 4,
  CLIMATE_SNOW = 5,
  CLIMATE_MIST = 6,
  CLIMATE_DESERT = 7,
}

export const ClimateType: EnumDefault = {
  __signed: true,
  types: types,
}