import { ConfigDefault } from ".."

export const ConfigParabolaBulletMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBulletMove",
  Fields: {
    angleOffHor: "float",
    gravityOfAcceleration: "float",
    correction: "ConfigMoveCorrection",
  },
}
