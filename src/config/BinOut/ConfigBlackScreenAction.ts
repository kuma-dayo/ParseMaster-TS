import { ConfigDefault } from ".."

export const ConfigBlackScreenAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    blackScreenType: "BlackScreenType",
    durationToBlack: "float",
    durationKeepBlack: "float",
    durationFromBlack: "float",
    changeToInteePos: "bool",
    inteePos: "string",
    textMapID: "string",
    textShake: "bool",
    useWhiteScreen: "bool",
    useTextFade: "bool",
    dialogID: "vuint",
    needWaitClick: "bool",
    showClickBtnDelayTime: "float",
  },
}
