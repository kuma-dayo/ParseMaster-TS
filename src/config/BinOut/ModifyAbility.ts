import { ConfigDefault } from "../"

export const ModifyAbility: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigTalentMixin",
  Fields: {
    abilityName: "string",
    paramSpecial: "string",
    paramDelta: "DynamicArgument",
    paramRatio: "DynamicArgument",
  },
}
