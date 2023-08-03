import { ConfigDefault } from "../"

export const ConfigCameraDOFAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    enabled: "bool",
    focusDistance: "float",
    focusRange: "float",
    nearFocalDistance: "float",
    nearFocalTransDistance: "float",
    dofBlurAmount: "float",
    quality: "vuint",
  },
}
