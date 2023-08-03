import { ConfigDefault } from "../"

export const TriggerGatherCollect: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    selectTargets: "SelectTargetsByShape",
    maxCount: "DynamicInt",
  },
}
