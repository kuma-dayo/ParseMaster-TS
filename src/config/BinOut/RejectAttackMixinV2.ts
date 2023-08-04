import { ConfigDefault } from ".."

export const RejectAttackMixinV2: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    attackTags: "string[]",
    limitTime: "float",
    type: "RejectEventType",
    isWhiteList: "bool",
  },
}
