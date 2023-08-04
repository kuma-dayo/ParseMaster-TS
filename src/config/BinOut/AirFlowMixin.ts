import { ConfigDefault } from ".."

export const AirFlowMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    gadgetID: "vuint",
    campID: "vuint",
    campTargetType: "TargetType",
    born: "ConfigBornType",
  },
}
