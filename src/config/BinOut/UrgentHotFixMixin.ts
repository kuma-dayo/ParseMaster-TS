import { ConfigDefault } from "../"

export const UrgentHotFixMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    logicId: "vuint",
    thinkInterval: "float",
    actionList: "ConfigAbilityAction[]",
  },
}
