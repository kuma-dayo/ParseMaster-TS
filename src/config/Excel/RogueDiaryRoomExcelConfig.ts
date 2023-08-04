import { ConfigDefault } from ".."

export const RogueDiaryRoomExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    normalTideId: "vuint",
    hardTideId: "vuint",
    challengeId: "vuint",
    coinRewardNormal: "vuint",
    coinRewardHard: "vuint",
    descHardTextMapHash: "vuint",
    isBoss: "bool",
  },
}
