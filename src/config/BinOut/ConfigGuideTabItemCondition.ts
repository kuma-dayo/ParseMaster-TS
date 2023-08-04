import { ConfigDefault } from ".."

export const ConfigGuideTabItemCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    path: "string",
    contextName: "string",
    value: "vint",
    pageType: "GuidePageType",
    isSelect: "bool",
  },
}
