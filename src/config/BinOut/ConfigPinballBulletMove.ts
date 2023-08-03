import { ConfigDefault } from "../"

export const ConfigPinballBulletMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBulletMove",
  Fields: {
    radius: "float",
    traceOnYAxis: "bool",
    destroyWhenTargetDie: "bool",
    randomBackAngleAdded: "float",
    reboundInterval: "float",
    outOfRangeFixCD: "float",
  },
}