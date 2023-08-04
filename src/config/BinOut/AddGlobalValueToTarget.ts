import { ConfigDefault } from ".."

export const AddGlobalValueToTarget: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    srcTarget: "AbilityTargetting",
    dstTarget: "AbilityTargetting",
    srcKey: "string",
    dstKey: "string",
  },
}
