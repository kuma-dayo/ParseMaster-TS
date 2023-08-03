import { ConfigDefault } from "../"

export const ConfigGuideNavigationCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    navigationId: "vuint",
    navigationType: "GuideNavigationType",
    checkType: "GuideNavigationCheckType",
    onlyCheckChange: "bool",
  },
}
