import { ConfigDefault } from "../"

export const AudioWeatherVoTrigger: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    weatherTypeList: "ConfigWeatherType[]",
    weatherTypeIsInclude: "bool",
    weatherList: "string[]",
    weatherIsInclude: "bool",
    previousWeatherTypeList: "ConfigWeatherType[]",
    previousWeatherTypeIsInclude: "bool",
    previousWeatherList: "string[]",
    previousWeatherIsInclude: "bool",
    voTrigger: "VoiceTriggerIdentity",
    timeLimit: "AudioWeatherVoTrigger_TimeRule[]",
  },
}
