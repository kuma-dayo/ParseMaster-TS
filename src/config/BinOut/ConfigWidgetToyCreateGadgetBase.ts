import { ConfigDefault } from "../"

export const ConfigWidgetToyCreateGadgetBase: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidgetToy",
  Fields: {
    gadgetId: "vuint",
    isSetCamera: "bool",
    setCameraAngle: "float",
    doBagType: "CreateSeverGadgetOpType",
  },
}