import { EnumDefault } from "."

enum types {
  Area = 0,
  Weather = 1,
  Skill = 2,
}

export const TriggerWeatherType: EnumDefault = {
  __signed: true,
  types: types,
}
