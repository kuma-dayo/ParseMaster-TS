import { ConfigDefault } from ".."

export const IceFloorMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    width: "float",
    height: "float",
    moveDistance: "float",
    minInterval: "float",
    doAction: "ConfigAbilityAction",
  },
}
