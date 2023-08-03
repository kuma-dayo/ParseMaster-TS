import { ConfigDefault } from "../"

export const ConfigAIPrecombatSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    bioClockSleepFrom: "float",
    bioClockSleepTo: "float",
    satietyTime: "float",
    overrideWeatherNeuronMapping: "map<ConfigWeatherType,NeuronName[]>",
    needMusicSlient: "bool",
  },
}