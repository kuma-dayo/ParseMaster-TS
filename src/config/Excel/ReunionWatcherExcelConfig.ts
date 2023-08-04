import { ConfigDefault } from ".."

export const ReunionWatcherExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    watcherGroupId: "vuint",
    descTextMapHash: "vuint",
    activateLevelRange: "string",
    rewardId: "vuint",
    score: "vuint",
    rewardUnlockDay: "vuint",
  },
}
