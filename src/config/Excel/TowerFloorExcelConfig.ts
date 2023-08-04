import { ConfigDefault } from ".."

export const TowerFloorExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    floorId: "vuint",
    floorIndex: "vuint",
    levelGroupId: "vuint",
    overrideMonsterLevel: "vuint",
    teamNum: "vuint",
    rewardIdFiveStars: "vuint",
    rewardIdTenStars: "vuint",
    rewardIdFifteenStars: "vuint",
    rewardIdThreeStars: "vuint",
    rewardIdSixStars: "vuint",
    rewardIdNineStars: "vuint",
    unlockStarCount: "vuint",
    floorLevelConfigId: "vuint",
    bgImage: "string",
  },
}
