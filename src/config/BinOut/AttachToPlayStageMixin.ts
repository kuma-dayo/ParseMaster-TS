import { ConfigDefault } from "../"

export const AttachToPlayStageMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    stage: "vuint",
    actions: "ConfigAbilityAction[]",
  },
}