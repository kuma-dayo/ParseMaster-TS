import { ConfigDefault } from ".."

export const ReputationRequestExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    RequestId: "vuint",
    QuestId: "vuint",
    GroupId: "vuint",
    weight: "vuint",
    npcId: "vuint",
    rewardId: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    iconName: "string",
  },
}
