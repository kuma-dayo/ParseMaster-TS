import { ConfigDefault } from "../"

export const ReTriggerAISkillInitialCD: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    skillIDs: "vuint[]",
    forceReinit: "bool",
  },
}