import { ConfigDefault } from ".."

export const WeightDetectRegionMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    globalValueKey: "string",
    onWeightChanged: "ConfigAbilityAction[]",
  },
}
