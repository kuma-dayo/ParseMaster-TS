import { ConfigDefault } from "../"

export const ConfigWidgetToyBonfire: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidgetToy",
  Fields: {
    coolDown: "vuint",
    lastingTime: "vuint",
    maxCountInScene: "vuint",
    maxCountByPlayer: "vuint",
    gadgetId: "vuint",
    distanceToAvatar: "float",
    radius: "float",
    combatDestroyDistance: "float",
  },
}
