import { ConfigDefault } from "../"

export const SetEmissionScaler: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    materialType: "BodyMaterialType",
    useDefaultColor: "bool",
    value: "float",
    duration: "float",
    emissionPower: "float",
    emissionColor: "ColorVector",
  },
}
