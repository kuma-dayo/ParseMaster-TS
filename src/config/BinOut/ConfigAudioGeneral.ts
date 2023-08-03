import { ConfigDefault } from "../"

export const ConfigAudioGeneral: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    pauseGameObjectEvent: "ConfigWwiseString",
    resumeGameObjectEvent: "ConfigWwiseString",
    pauseBusEvent: "ConfigWwiseString",
    resumeBusEvent: "ConfigWwiseString",
    stopAllEvent: "ConfigWwiseString",
    permanentSoundBanks: "vuint[]",
    platformPermanentBanks: "map<string,vuint[]>",
    entityTypeInfo: "ConfigAudioEntityTypeInfo",
  },
}
