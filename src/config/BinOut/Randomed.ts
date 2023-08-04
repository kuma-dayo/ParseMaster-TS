import { ConfigDefault } from ".."

export const Randomed: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    chance: "DynamicFloat",
    successActions: "ConfigAbilityAction[]",
    failActions: "ConfigAbilityAction[]",
  },
}
