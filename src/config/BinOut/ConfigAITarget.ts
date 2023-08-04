import { ConfigDefault } from ".."

export const ConfigAITarget: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    defaultTargetPrioritys: "AITargetSystemType[]",
    specificationTargetPrioritys: "map<vint,AITargetSystemType[]>",
  },
}
