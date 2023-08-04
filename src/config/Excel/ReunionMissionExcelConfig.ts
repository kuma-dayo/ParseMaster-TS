import { ConfigDefault } from ".."

export const ReunionMissionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    watcherGroupId: "vuint",
    targetScore: "vuint",
    finishRewardId: "vuint",
    targetScoreList: "vuint[]",
    finishRewardIdList: "vuint[]",
    showRewardIdList: "vuint[]",
    JMAFEPNCHMN: "vuint",
  },
}
