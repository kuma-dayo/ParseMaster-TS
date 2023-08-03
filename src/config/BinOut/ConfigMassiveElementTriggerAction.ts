import { ConfigDefault } from "../"

export const ConfigMassiveElementTriggerAction: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    triggerType: "MassiveElementTriggerType",
    stackType: "ModifierStacking",
    reduceDurability: "float",
    duration: "float",
    attackID: "string",
    actionID: "string",
    onFlush: "ConfigAbilityAction[]",
    onPreUpdate: "ConfigAbilityAction[]",
    onDetach: "ConfigAbilityAction[]",
  },
}
