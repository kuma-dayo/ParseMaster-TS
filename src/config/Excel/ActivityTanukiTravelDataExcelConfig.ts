import { ConfigDefault } from "../"

export const ActivityTanukiTravelDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    activityId: "vuint",
    guideQuestId: "vuint",
    activityOpenList: "vuint[]",
    rewardPreviewId: "vuint",
    inazumaQuestId: "vuint",
    sakuraQuestId: "vuint",
    preOrderQuestIdList: "vuint[]",
    pushTipsId: "vuint",
  },
}
