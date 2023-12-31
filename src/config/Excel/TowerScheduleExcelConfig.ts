//Auto Generated by ConfigParser
import { ConfigDefault } from ".."

export const TowerScheduleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scheduleId: "vuint",
    entranceFloorId: "vuint[]",
    schedules: "TowerSchedule[]",
    closeTime: "string",
    rewardGroup: "vuint",
    scheduleRewards: "TowerStarReward[]",
    commemorativeReward: "vuint",
    monthlyLevelConfigId: "vuint",
    descTextMapHash: "vuint",
    buffnameTextMapHash: "vuint",
    icon: "string",
  },
}
