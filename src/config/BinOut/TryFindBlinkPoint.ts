import { ConfigDefault } from "../"

export const TryFindBlinkPoint: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    forwardAngle: "float",
    minRange: "float",
    maxRange: "float",
    limitY: "float",
    ignoreWater: "bool",
    checkInCamera: "bool",
  },
}