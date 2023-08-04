import { ConfigDefault } from ".."

export const DoActionByDamageReceivedMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    paramType: "DoActionByDamageReceivedParamType",
    valueMin: "DynamicFloat",
    valueMax: "DynamicFloat",
    actionQueue: "ConfigAbilityAction[]",
  },
}
