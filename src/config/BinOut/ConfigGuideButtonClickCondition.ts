import { ConfigDefault } from "../"

export const ConfigGuideButtonClickCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    buttonPath: "string",
    contextName: "string",
    pageType: "GuidePageType",
    type: "GuideButtonClick",
    value: "float",
    special: "GuideWidgetSpecialType",
    specialIndex: "vint",
    longPressType: "GuideLongPressType",
    forceLastClick: "bool",
  },
}