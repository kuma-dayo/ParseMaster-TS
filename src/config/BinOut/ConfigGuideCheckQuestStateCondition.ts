import { ConfigDefault } from ".."

export const ConfigGuideCheckQuestStateCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    questId: "vuint",
    questState: "vuint",
    isEqual: "bool",
  },
}
