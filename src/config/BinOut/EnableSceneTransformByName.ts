import { ConfigDefault } from "../"

export const EnableSceneTransformByName: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    transformNames: "string[]",
    setEnable: "bool",
  },
}