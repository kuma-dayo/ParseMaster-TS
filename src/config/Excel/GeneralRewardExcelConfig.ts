import { ConfigDefault } from "../"

export const GeneralRewardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    useCondenseResin: "bool",
    rewardSourceSystem: "RewardSourceSystemType",
    rewardSourceSystemPara: "vuint",
    titleTextMapHash: "vuint",
    staminaEnoughTextMapHash: "vuint",
    staminaLessTextMapHash: "vuint",
    condenseResinStaminaEnoughTextMapHash: "vuint",
    condenseResinStaminaLessTextMapHash: "vuint",
    usingActivityCoinTextMapHash: "vuint",
    usingActivityCoinButtonTextMapHash: "vuint",
    confirmTextMapHash: "vuint",
    resinMonthlyTextMapHash: "vuint",
    insufficientTextMapHash: "vuint",
    insufficientUseitemTextMapHash: "vuint",
    condenseResinTextMapHash: "vuint",
  },
}
