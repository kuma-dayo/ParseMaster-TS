import { ConfigDefault } from ".."

export const RewardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "OutputControlConfig",
  Fields: {
    rewardId: "vuint",
    hcoin: "vuint",
    scoin: "vuint",
    playerExp: "vuint",
    avatarExp: "vuint",
    fetterExp: "vuint",
    resin: "vuint",
    rewardItemList: "RewardItemConfig[]",
  },
}
