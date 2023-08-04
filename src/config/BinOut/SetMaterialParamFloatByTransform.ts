import { ConfigDefault } from ".."

export const SetMaterialParamFloatByTransform: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    matName: "string",
    patternName: "string",
    value: "DynamicFloat",
    useCurve: "bool",
    lerpCurveIndex: "vuint",
    lerpTime: "float",
  },
}
