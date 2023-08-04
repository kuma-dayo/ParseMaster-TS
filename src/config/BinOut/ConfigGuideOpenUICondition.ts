import { ConfigDefault } from ".."

export const ConfigGuideOpenUICondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    contextName: "string",
    enable: "bool",
    activeList: "string[]",
    pageType: "GuidePageType",
  },
}
