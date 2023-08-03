import { ConfigDefault } from "../"

export const ConfigWidgetGadgetBuilder: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidget",
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
