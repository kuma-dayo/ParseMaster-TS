import { ConfigDefault } from "../"

export const ConfigGuideFoundationBuildCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    num: "vint",
    opt: "GuideOperator",
    isBuild: "bool",
  },
}
