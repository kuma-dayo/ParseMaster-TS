import { ConfigDefault } from ".."

export const ConfigBornByTargetLinearPoint: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBornType",
  Fields: {
    linearOffset: "DynamicFloat",
    baseOnTarget: "bool",
    linearXZ: "bool",
    linearMin: "DynamicFloat",
    linearMax: "DynamicFloat",
  },
}
