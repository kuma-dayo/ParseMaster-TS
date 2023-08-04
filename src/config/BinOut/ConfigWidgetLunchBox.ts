import { ConfigDefault } from ".."

export const ConfigWidgetLunchBox: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidget",
  Fields: {
    reviveMaterials: "vuint[]",
    healMaterials: "ConfigWidgetLunchBoxHealMaterial",
  },
}
