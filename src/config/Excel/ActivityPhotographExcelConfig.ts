import { ConfigDefault } from "../"

export const ActivityPhotographExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    photoPosIdList: "vuint[]",
    photoUseableWidgetList: "vuint[]",
    fovMax: "float",
    fovMin: "float",
    fovDefault: "float",
    cameraShiftUp: "float",
    cameraShiftDown: "float",
    cameraShiftLeft: "float",
    cameraShiftRight: "float",
    questAcceptionMarkId: "vuint",
    pushTipsId: "vuint",
    cameraPosTipOffset: "float",
    extraTipMiddleQuest1: "vuint[]",
    extraTipMiddleQuest2: "vuint[]",
    extraTipMiddleQuest3: "vuint[]",
  },
}
