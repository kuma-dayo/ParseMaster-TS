import { ConfigDefault } from "../"

export const ConfigMainWidgetToy: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    gadgetConfigMap: "map<vuint,ConfigWidgetGadget>",
    cdGroupConfigMap: "map<vuint,ConfigWidgetCdGroup>",
    widgetConfigMap: "map<vuint,ConfigBaseWidgetToy>",
  },
}
