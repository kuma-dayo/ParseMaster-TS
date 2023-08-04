import { ConfigDefault } from ".."

export const MpPlayStatisticConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    MpPlayId: "vuint",
    settleType: "MpPlayerSettleType",
    settleParam: "string[]",
    clientSyncType: "MpPlayerSettleSyncType",
    clientSyncParam: "string",
    mpchallengetitleTextMapHash: "vuint",
    mpchallengeTextMapHash: "vuint",
    mpchallengestyleTextMapHash: "vuint",
    image: "string",
    priority: "vuint",
  },
}
