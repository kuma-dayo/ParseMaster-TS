import { ConfigDefault } from "../"

export const ConfigElemBall: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    type: "ElemBallTriggerType",
    elementType: "ElementType",
    curMaxNum: "vint",
    intervalTimes: "float[]",
    dropItems: "vuint[]",
    dropCounts: "vuint[]",
    maxNum: "vint",
    poissonDisk: "float",
    minRadius: "float",
    maxRadius: "float",
  },
}
