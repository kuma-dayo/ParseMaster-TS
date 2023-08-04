import { ConfigDefault } from ".."

export const ShowUICombatBar: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    show: "bool",
    sortID: "vuint",
    changingSortID: "bool",
    fore: "bool",
  },
}
