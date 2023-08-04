import { ConfigDefault } from ".."

export const FindHilichurlExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    rewardPreviewId: "vuint",
    guideQuestId: "vuint",
    endQuestId: "vuint",
    assignmentIdList: "vuint[]",
    HiliWeiIdList: "vuint[]",
  },
}
