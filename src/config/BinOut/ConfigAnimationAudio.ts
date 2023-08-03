import { ConfigDefault } from "../"

export const ConfigAnimationAudio: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    onTransitionIn: "ConfigStateAudioEvent[]",
    onTransitionOut: "ConfigStateAudioEvent[]",
    recurrentSpeeches: "map<string,ConfigAnimationRecurrentSpeech>",
  },
}