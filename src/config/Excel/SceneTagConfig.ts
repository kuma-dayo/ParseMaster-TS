import { ConfigDefault } from ".."

export const SceneTagConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    sceneTagName: "string",
    sceneId: "vuint",
    isDefaultValid: "bool",
    isSkipLoading: "bool",
    isIndependent: "bool",
    cond: "SceneTagCond[]",
  },
}
