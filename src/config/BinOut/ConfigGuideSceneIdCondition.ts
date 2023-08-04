import { ConfigDefault } from ".."

export const ConfigGuideSceneIdCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    sceneId: "vuint",
    sceneIdList: "vuint[]",
    isScene: "bool",
  },
}
