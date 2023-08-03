import { ConfigDefault } from "../"

export const ConfigQTEStepCutsceneFailedBlackScreenAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigQTEStepBaseAction",
  Fields: {
    restartSavePointId: "vint",
    failedSubQuestId: "vuint",
    textmapId: "string",
    showImmediately: "bool",
  },
}