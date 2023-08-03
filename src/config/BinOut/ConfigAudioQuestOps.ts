import { ConfigDefault } from "../"

export const ConfigAudioQuestOps: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    questId: "vuint",
    eventsOnStart: "ConfigWwiseString[]",
    statesOnStart: "AudioStateOp[]",
    eventsOnFinish: "ConfigWwiseString[]",
    statesOnFinish: "AudioStateOp[]",
  },
}
