//Auto Generated by ConfigParser
import { ConfigDefault } from ".."

export const ConfigGuideTask: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    name: "string",
    isFreshmanGuide: "bool",
    predicates: "ConfigGuideCondition[]",
    onCheck: "ConfigGuideCondition[]",
    onGuide: "ConfigGuideAction[]",
    finishCondition: "ConfigGuideCondition[][]",
    onFinish: "ConfigGuideAction[]",
    onQuit: "ConfigGuideAction[]",
  },
}
