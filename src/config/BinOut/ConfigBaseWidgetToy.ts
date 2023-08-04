import { ConfigDefault } from ".."

export const ConfigBaseWidgetToy: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    isConsumeMaterial: "bool",
    cdGroup: "vuint",
    tags: "WidgetOccupyTag[]",
    businessType: "WidgetBusinessType",
  },
}
