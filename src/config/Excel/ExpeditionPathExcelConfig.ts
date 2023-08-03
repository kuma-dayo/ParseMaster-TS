import { ConfigDefault } from "../"

export const ExpeditionPathExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    difficultyId: "vuint",
    superElement: "string",
    basicRewardId: "vuint",
    bonusRewardId: "vuint",
    pathNameTextMapHash: "vuint",
    pathDescTextMapHash: "vuint",
    levelRewardList: "vuint[]",
    rewardPreviewId: "vuint",
  },
}
