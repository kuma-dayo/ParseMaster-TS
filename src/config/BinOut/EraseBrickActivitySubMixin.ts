import { ConfigDefault } from "../"

export const EraseBrickActivitySubMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    durabilityChangedGV: "string",
    actions: "ConfigAbilityAction[]",
  },
}
