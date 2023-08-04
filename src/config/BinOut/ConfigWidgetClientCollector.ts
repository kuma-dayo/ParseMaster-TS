import { ConfigDefault } from ".."

export const ConfigWidgetClientCollector: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidget",
  Fields: {
    targetType: "CollectorType",
    elementType: "ElementType",
    rechargePoints: "vuint",
    maxPoints: "vuint",
    effectGadgetId: "vuint",
    useGadgetId: "vuint",
    allowOtherWorld: "bool",
  },
}
