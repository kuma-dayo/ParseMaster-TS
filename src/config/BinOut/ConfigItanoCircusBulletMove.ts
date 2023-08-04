import { ConfigDefault } from ".."

export const ConfigItanoCircusBulletMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBulletMove",
  Fields: {
    itanoCircusStartAngler: "float",
    destroyWhenTargetDie: "bool",
    guidanceDelay: "float",
    guidanceSpeedChange: "bool",
    guidanceMinAnglerVelocity: "float",
    guidanceDuration: "float",
  },
}
