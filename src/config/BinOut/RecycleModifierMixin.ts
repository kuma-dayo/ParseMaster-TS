import { ConfigDefault } from "../"

export const RecycleModifierMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    modifierName: "string",
    cd: "float",
    initialCD: "float",
  },
}
