import { ConfigDefault } from ".."

export const ConfigExternalVoiceItem: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    guid: "string",
    playRate: "float",
    initialDelay: "float",
    cooldown: "vint",
    interruptedGuids: "ConfigExternalVoiceInferiorItem[]",
    excludedGuids: "ConfigExternalVoiceInferiorItem[]",
    queueUpConfig: "vint",
    gameTrigger: "string",
    gameTriggerArgs: "vuint",
    personalConfig: "vint",
    viewConfig: "vint",
    clearAll: "bool",
    isGlobalStop: "bool",
    isPlayOnTeam: "bool",
    avoidRepeat: "vint",
    parentID: "string",
    sourceNames: "ConfigExternalVoiceSound[]",
  },
}
