import { ConfigDefault } from "../"

export const TriggerPostProcessEffectMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    postEffectAssetName: "string",
    duration: "float",
    isStageEffect: "bool",
    forceFadeOut: "bool",
  },
}