import { ConfigDefault } from "../"

export const EntityDisplacementMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    triggerDistance: "float",
    actionList: "ConfigAbilityAction[]",
  },
}