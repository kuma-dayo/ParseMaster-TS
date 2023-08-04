import { ConfigDefault } from ".."

export const MpPlayWatcherConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    MpPlayId: "vuint",
    priority: "vuint",
    isStore: "bool",
    challengeDescTextMapHash: "vuint",
    challengeTitleTextMapHash: "vuint",
  },
}
