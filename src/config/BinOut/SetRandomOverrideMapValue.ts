import { ConfigDefault } from ".."

export const SetRandomOverrideMapValue: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    valueRangeMax: "float",
    valueRangeMin: "float",
    overrideMapKey: "string",
    roundType: "RoundRandomType",
  },
}
