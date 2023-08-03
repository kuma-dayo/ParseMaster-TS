import { ConfigDefault } from "../"

export const BroadcastNeuronStimulate: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    neuronName: "NeuronName",
    stimulate: "bool",
    range: "float",
  },
}
