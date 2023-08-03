import { ConfigDefault } from "../"

export const ConfigMusic: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    switchGroup: "ConfigWwiseString",
    playEvent: "ConfigWwiseString",
    stopEvent: "ConfigWwiseString",
    pauseEvent: "ConfigWwiseString",
    resumeEvent: "ConfigWwiseString",
    duckEvent: "ConfigWwiseString",
    unduckEvent: "ConfigWwiseString",
    startTransitions: "ConfigMusicTransitions",
    syncTransitions: "ConfigMusicSyncTransitions",
    timeTransitions: "ConfigMusicTimeTransitions",
    stimulusHandlers: "ConfigMusicStimulusHandler[]",
  },
}
