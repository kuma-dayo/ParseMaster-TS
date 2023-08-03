import { ConfigDefault } from "../"

export const ConfigSurroundBulletMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBulletMove",
  Fields: {
    clockwise: "bool",
    radius: "float",
    traceOnYAxis: "bool",
    destroyWhenTargetDie: "bool",
  },
}
