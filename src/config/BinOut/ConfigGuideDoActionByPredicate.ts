import { ConfigDefault } from ".."

export const ConfigGuideDoActionByPredicate: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideAction",
  Fields: {
    predicates: "ConfigGuideCondition[][]",
    actions: "ConfigGuideAction[]",
  },
}
