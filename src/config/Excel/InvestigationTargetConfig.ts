import { ConfigDefault } from "../"

export const InvestigationTargetConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    questId: "vuint",
    investigationId: "vuint",
    rewardId: "vuint",
    icon: "string",
    image: "string",
    infoDesTextMapHash: "vuint",
    guide: "QuestGuide",
  },
}
