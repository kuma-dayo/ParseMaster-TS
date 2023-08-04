import { ConfigDefault } from ".."

export const ConfigWidgetBonfire: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidget",
  Fields: {
    lastingTime: "vuint",
    maxCountInScene: "vuint",
    maxCountByPlayer: "vuint",
    gadgetId: "vuint",
    distanceToAvatar: "float",
    radius: "float",
    combatDestroyDistance: "float",
  },
}
