import { ConfigDefault } from "../"

export const ConfigTriggerMassiveElementTask: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityTask",
  Fields: {
    entityElements: "ConfigMassiveEntityElement[]",
    elementTriggerActions: "ConfigMassiveElementTriggerAction[]",
  },
}
