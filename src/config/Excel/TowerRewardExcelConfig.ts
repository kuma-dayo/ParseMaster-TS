import { ConfigDefault } from "../"

export const TowerRewardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    rewardGroup: "vuint",
    floor: "vuint",
    rewardId3Stars: "vuint",
    rewardId6Stars: "vuint",
    rewardId9Stars: "vuint",
    rewardIdRoom: "vuint[]",
  },
}