import { ConfigDefault } from "../"

export const BattlePassScheduleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    titleNameTextMapHash: "vuint",
    beginDateStr: "string",
    endDateStr: "string",
    cycleList: "vuint[]",
    extraPaidRewardId: "vuint",
    extraPaidAddPoint: "vuint",
    buyLevelCostCoinNum: "vuint",
    cyclePointUpperLimit: "vuint",
    levelRewardIndexId: "vuint",
    normalRewardList: "vuint[]",
    rewardType: "BattlePassScheduleRewardType",
    showImage: "string",
    showRewardList: "vuint[]",
    stroyRewardList: "vuint[]",
    storyId: "vuint",
    mailDayCount: "vuint",
    mailConfigId: "vuint",
  },
}
