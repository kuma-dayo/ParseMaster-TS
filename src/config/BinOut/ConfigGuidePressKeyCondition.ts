import { ConfigDefault } from "../"

export const ConfigGuidePressKeyCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    eventID: "InputEventType",
    endEventID: "InputEventType",
    type: "GuideKeyClick",
    value: "float",
  },
}