import { ConfigDefault } from ".."

export const ConfigCutsceneInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    cutsceneCfg: "ConfigBaseCutscene",
    cutsceneIndex: "vuint",
    syncLoad: "bool",
  },
}
