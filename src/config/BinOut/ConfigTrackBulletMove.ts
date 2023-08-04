import { ConfigDefault } from ".."

export const ConfigTrackBulletMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBulletMove",
  Fields: {
    destroyWhenTargetDie: "bool",
    traceOnYAxis: "bool",
    whenNoTarget: "ConfigWhenNoTarget",
  },
}
