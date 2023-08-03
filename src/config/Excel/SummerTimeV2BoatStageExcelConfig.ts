import { ConfigDefault } from "../"

export const SummerTimeV2BoatStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    dayIndex: "vuint",
    watcherList: "vuint[]",
    galleryId: "vuint",
    pushTipsId: "vuint",
    groupLinkID: "vuint",
    conditionType: "SummerTimeV2BoatConditionType[]",
    conditionParam: "vuint[]",
    conditionDesc: "vuint[]",
    conditionResult: "vuint[]",
  },
}
