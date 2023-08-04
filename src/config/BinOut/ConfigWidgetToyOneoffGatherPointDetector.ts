import { ConfigDefault } from ".."

export const ConfigWidgetToyOneoffGatherPointDetector: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidgetToy",
  Fields: {
    hintRadius: "vuint",
    nearbyRadius: "vuint",
    gridSearchRange: "vuint",
    successGadgetId: "vuint",
    failedGadgetId: "vuint",
    gatherPointType: "vuint",
    hintGroup: "vuint",
    effectLastTime: "vuint",
    distanceToAvatar: "float",
    height: "float",
  },
}
