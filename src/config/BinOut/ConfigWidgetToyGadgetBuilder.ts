import { ConfigDefault } from "../"

export const ConfigWidgetToyGadgetBuilder: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidgetToy",
  Fields: {
    lastingTime: "vuint",
    maxCountInScene: "vuint",
    maxCountByPlayer: "vuint",
    gadgetId: "vuint",
    distanceToAvatar: "float",
    heightToAvatar: "float",
    radius: "float",
    checkCollision: "bool",
  },
}