import { ConfigDefault } from "../"

export const TryTriggerTrampolineJump: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    failActions: "ConfigAbilityAction[]",
    successActions: "ConfigAbilityAction[]",
  },
}
