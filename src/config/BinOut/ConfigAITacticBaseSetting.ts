import { ConfigDefault } from ".."

export const ConfigAITacticBaseSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    enable: "bool",
    condition: "ConfigAITacticCondition",
    nerveTrigger: "NeuronName[]",
  },
}
