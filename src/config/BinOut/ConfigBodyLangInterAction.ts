import { ConfigDefault } from ".."

export const ConfigBodyLangInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    isContinue: "bool",
    bodyLangParam: "vint",
    loopState: "vint",
    forceInterrupt: "bool",
    randomParamList: "vint[]",
    forceDoFreeStyle: "bool",
    canDoRepeatFreeStyle: "bool",
    dontClearPreFreeStyle: "bool",
    cant_back_to_idle_when_sit_loop: "bool",
  },
}
