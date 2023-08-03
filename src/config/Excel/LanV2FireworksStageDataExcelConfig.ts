import { ConfigDefault } from "../"

export const LanV2FireworksStageDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    openDay: "vuint",
    challengeIdList: "vuint[]",
    tabNameTextMapHash: "vuint",
    questDescTextMapHash: "vuint",
    guideQuestId: "vuint[]",
    guideQuestRewardPreviewId: "vuint",
  },
}
