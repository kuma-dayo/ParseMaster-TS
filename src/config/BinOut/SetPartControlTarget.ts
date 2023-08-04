import { ConfigDefault } from ".."

export const SetPartControlTarget: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    partRootNames: "string[]",
    targetType: "ControlPartTargetType",
  },
}
