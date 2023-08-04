import { ConfigDefault } from ".."

export const AttachModifierByNeuronMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    neuronNameList: "NeuronName[]",
    removeOperator: "NeuronMixinRemoveOperatorType",
    modifierName: "string",
    authorityOnly: "bool",
  },
}
