import { ConfigDefault } from ".."

export const SetSameElementCountToGlobalValue: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    checkSameElement: "bool",
    elementBaseOn: "AbilityTargetting",
    globalValueKey: "string",
    teamBaseOn: "AbilityTargetting",
  },
}
