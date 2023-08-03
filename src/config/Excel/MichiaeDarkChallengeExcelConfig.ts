import { ConfigDefault } from "../"

export const MichiaeDarkChallengeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    challengeId: "vuint",
    rewardId: "vuint[]",
    groupId: "vuint",
  },
}
