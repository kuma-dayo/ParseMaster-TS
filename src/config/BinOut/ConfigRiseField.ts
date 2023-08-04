import { ConfigDefault } from ".."

export const ConfigRiseField: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigForceField",
  Fields: {
    cdmin: "float",
    cdmax: "float",
    vmin: "float",
    vmax: "float",
    hmin: "float",
    hmax: "float",
    attenuation: "float",
    box: "Vector",
    shape: "ConfigBaseShape",
  },
}
