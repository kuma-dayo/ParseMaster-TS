import { ConfigDefault } from "../"

export const ConfigAttackCircle: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigSimpleAttackPattern",
  Fields: {
    height: "float",
    fanAngle: "float",
    radius: "DynamicFloat",
    innerRadius: "DynamicFloat",
    detectDirection: "CircleDetectDirection",
  },
}