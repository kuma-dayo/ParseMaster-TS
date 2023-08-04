import { ConfigDefault } from ".."

export const TrialAvatarActivityDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    trialAvatarIndexId: "vuint",
    trialAvatarId: "vuint",
    dungeonId: "vuint",
    battleAvatarsList: "string",
    firstPassReward: "vuint",
    titleTextMapHash: "vuint",
    briefInfoTextMapHash: "vuint",
  },
}
