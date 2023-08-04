import { ConfigDefault } from ".."

export const ConfigSimpleBlackScreenAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    durationToBlack: "float",
    durationKeepBlack: "float",
    durationFromBlack: "float",
    textMapID: "string",
    useWhiteScreen: "bool",
    useTextFade: "bool",
    dialogID: "vuint",
    disableResAsyncLoad: "bool",
  },
}
