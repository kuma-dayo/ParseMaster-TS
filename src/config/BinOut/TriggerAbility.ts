import { ConfigDefault } from "../"

export const TriggerAbility: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    abilityName: "string",
    abilitySpecials: "map<string,DynamicFloat>",
    forceUseSelfCurrentAttackTarget: "bool",
  },
}
