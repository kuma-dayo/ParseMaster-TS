import { ConfigDefault } from ".."

export const ConfigWidgetMiracleRing: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidget",
  Fields: {
    maxCountInScene: "vuint",
    maxCountByPlayer: "vuint",
    gadgetId: "vuint",
    distanceToAvatar: "float",
    radius: "float",
    combatDestroyDistance: "float",
  },
}
