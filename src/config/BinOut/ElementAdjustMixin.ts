import { ConfigDefault } from ".."

export const ElementAdjustMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    changeInterval: "float",
    elementModifies: "map<ElementType,string>",
  },
}
