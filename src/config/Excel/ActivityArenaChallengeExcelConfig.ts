import { ConfigDefault } from "../"

export const ActivityArenaChallengeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    scheduleId: "vuint",
    arenaChallengeId: "vuint",
    arenaChallengeLevel: "vuint",
    isExtraLevel: "bool",
    watcherId: "vuint",
    challengeTargetTextMapHash: "vuint",
    challengeTarget1TextMapHash: "vuint",
    challengeTarget2TextMapHash: "vuint",
    challengeDesc: "string",
    challengeDesc1: "string",
    challengeDesc2: "string",
  },
}
