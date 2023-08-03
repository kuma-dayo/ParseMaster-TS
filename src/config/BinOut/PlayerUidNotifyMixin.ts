import { ConfigDefault } from "../"

export const PlayerUidNotifyMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    opParam: "string",
    opType: "vuint",
    logic: "RelationalOperator",
    actions: "ConfigAbilityAction[]",
  },
}