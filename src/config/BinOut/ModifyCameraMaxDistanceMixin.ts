import { ConfigDefault } from "../"

export const ModifyCameraMaxDistanceMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    MaxDistance: "float",
    ResetToMaxOnStart: "bool",
    LerpInDuration: "float",
    LerpOutDuration: "float",
  },
}
