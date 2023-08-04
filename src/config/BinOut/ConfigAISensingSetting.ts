import { ConfigDefault } from ".."

export const ConfigAISensingSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    sensitivity: "float",
    enableVision: "bool",
    viewRange: "float",
    viewPanoramic: "bool",
    horizontalFov: "float",
    verticalFov: "float",
    useEyeTransformRotation: "bool",
    hearAttractionRange: "float",
    hearFootstepRange: "float",
    feelRange: "float",
    sourcelessHitAttractionRange: "float",
  },
}
