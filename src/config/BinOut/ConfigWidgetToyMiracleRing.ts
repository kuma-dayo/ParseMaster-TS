import { ConfigDefault } from "../"

export const ConfigWidgetToyMiracleRing: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidgetToy",
  Fields: {
    isAllowedInDungeon: "bool",
    isAllowedInRoom: "bool",
    maxCountInScene: "vuint",
    maxCountByPlayer: "vuint",
    createGadgetId: "vuint",
    distanceToAvatar: "float",
    radius: "float",
    combatDestroyDistance: "float",
  },
}
