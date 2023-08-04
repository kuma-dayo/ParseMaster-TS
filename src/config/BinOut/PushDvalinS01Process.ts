import { ConfigDefault } from ".."

export const PushDvalinS01Process: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    time: "float",
    toPercentage: "float",
    unBreak: "bool",
    setForce: "bool",
    vector: "Vector",
    attenuation: "float",
  },
}
