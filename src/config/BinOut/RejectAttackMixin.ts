import { ConfigDefault } from "../"

export const RejectAttackMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    attackTag: "string",
    limitTime: "float",
    type: "RejectEventType",
  },
}
