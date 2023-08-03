import { ConfigDefault } from "../"

export const SetTeamFightPropertyToOverrideMapKey: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    type: "SetTeamFightPropertyToOverrideMapKeyType",
    fightProperty: "string",
    overrideMapKey: "string",
    useLimitRange: "bool",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
  },
}
