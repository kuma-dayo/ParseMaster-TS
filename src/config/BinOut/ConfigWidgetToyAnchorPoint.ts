import { ConfigDefault } from "../"

export const ConfigWidgetToyAnchorPoint: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidgetToy",
  Fields: {
    coolDown: "vuint",
    lastingTime: "vuint",
    maxCountInScene: "vuint",
    gadgetId: "vuint",
    invalidSceneIds: "vuint[]",
  },
}
