import { ConfigDefault } from "../"

export const NewActivityWatcherConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    rewardID: "vuint",
    rewardPreview: "vuint",
    activitychallengetipsTextMapHash: "vuint",
    extraActivitychallengetipsTextMapHash: "vuint",
    isAutoGrant: "bool",
  },
}
