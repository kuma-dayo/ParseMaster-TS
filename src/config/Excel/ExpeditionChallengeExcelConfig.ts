import { ConfigDefault } from "../"

export const ExpeditionChallengeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    unlockTime: "vuint",
    groupId: "vuint",
    rewardChallengeIndex: "vuint",
    rewardId: "vuint",
    challengeNameTextMapHash: "vuint",
    challengeDescTextMapHash: "vuint",
    superElement: "string",
    centerPosList: "float[]",
    centerRadius: "vuint",
  },
}