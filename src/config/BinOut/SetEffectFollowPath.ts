import { ConfigDefault } from ".."

export const SetEffectFollowPath: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    followPath: "string",
    effectPattern: "DynamicString",
    attachPoint: "string",
  },
}
