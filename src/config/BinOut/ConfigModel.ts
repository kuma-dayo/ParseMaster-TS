import { ConfigDefault } from ".."

export const ConfigModel: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    matLinearChangedByDistance: "ConfigMatLinearChangedByDistance[]",
    bornEffect: "string",
    attachEffect: "string",
    ignoreDistCheckWhenAttachEffect: "bool",
    canBakeMesh: "bool",
    setPerObjectShadowGroupID: "bool",
    hasCharacterRenderering: "bool",
  },
}
