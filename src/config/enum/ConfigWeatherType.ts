import { EnumDefault } from "."

enum types {
  ClearSky = 0,
  Cloudy = 1,
  Foggy = 2,
  Rain = 3,
  Snow = 4,
  Storm = 5,
  Skill = 6,
  Desert = 7,
}

export const ConfigWeatherType: EnumDefault = {
  __signed: true,
  types: types,
}
