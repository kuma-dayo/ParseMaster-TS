import { ConfigDefault } from ".."

export const BattlePassMissionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    refreshType: "BattlePassMissionRefreshType",
    isForce: "bool",
    addPoint: "vuint",
    scheduleId: "vuint",
    activityId: "vuint",
    descTextMapHash: "vuint",
    guide: "QuestGuide",
  },
}
