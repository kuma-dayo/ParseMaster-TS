import { ConfigDefault } from "../"

export const FishingAimParabolaMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    minAngle: "float",
    maxAngle: "float",
    minRange: "float",
    maxRange: "float",
    globalValueKey: "string",
    otherTargets: "SelectTargets",
    target: "AbilityTargetting",
  },
}
