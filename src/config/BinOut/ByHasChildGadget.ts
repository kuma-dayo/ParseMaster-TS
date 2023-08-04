import { ConfigDefault } from ".."

export const ByHasChildGadget: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    configIdArray: "vuint[]",
    value: "vuint",
    compareType: "RelationType",
    forceByCaster: "bool",
    checkEntityAlive: "bool",
  },
}
