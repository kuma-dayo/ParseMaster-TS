import { ConfigDefault } from ".."

export const ConfigBaseInterAction: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    type: "InteractionType",
    delayTime: "float",
    duration: "float",
    aliasList: "string[]",
    checkNextImmediately: "bool",
    actionId: "vuint",
    preActionId: "vuint",
    haveNextAction: "bool",
  },
}
