import { ConfigDefault } from "../"

export const ConfigRoute: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    localId: "vuint",
    name: "string",
    type: "RouteType",
    isForward: "bool",
    points: "ConfigWaypoint[]",
    rotType: "RotType",
    rotAngleType: "RotAngleType",
    arriveRange: "float",
  },
}
