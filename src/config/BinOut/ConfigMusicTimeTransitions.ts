import { ConfigDefault } from "../"

export const ConfigMusicTimeTransitions: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    interval: "float",
    repetitives: "ConfigMusicTransitions",
    fixedTimes: "ConfigMusicFixedTimeTransitions[]",
  },
}
