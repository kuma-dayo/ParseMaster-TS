import { ConfigDefault } from ".."

export const ReputationLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    level: "vuint",
    cityId: "vuint",
    levelNameTextMapHash: "vuint",
    nextLevelExp: "vuint",
    rewardId: "vuint",
    requestGroupId: "vuint",
    requestNum: "vuint",
    requestAcceptNum: "vuint",
    functionId: "vuint",
  },
}
