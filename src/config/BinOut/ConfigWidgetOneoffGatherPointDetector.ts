import { ConfigDefault } from ".."

export const ConfigWidgetOneoffGatherPointDetector: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidget",
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
