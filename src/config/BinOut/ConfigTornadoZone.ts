import { ConfigDefault } from "../"

export const ConfigTornadoZone: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    shapeName: "string",
    offset: "Vector",
    dir: "Vector",
    strength: "DynamicFloat",
    attenuation: "DynamicFloat",
    innerRadius: "DynamicFloat",
    modifierName: "string",
    maxNum: "vuint",
    forceGrowth: "float",
    forceFallen: "float",
    duration: "float",
  },
}
