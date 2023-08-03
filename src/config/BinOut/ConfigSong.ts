import { ConfigDefault } from "../"

export const ConfigSong: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    id: "vint",
    switchValue: "ConfigWwiseString",
    syncTransitions: "ConfigMusicSyncTransitions",
    timeTransitions: "ConfigMusicTimeTransitions",
    stimulusHandlers: "ConfigMusicStimulusHandler[]",
    ignoranceMask: "vint",
  },
}
