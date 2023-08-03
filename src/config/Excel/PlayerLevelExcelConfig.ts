import { ConfigDefault } from "../"

export const PlayerLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vuint",
    exp: "vuint",
    rewardId: "vuint",
    expeditionLimitAdd: "vuint",
    unlockWorldLevel: "vuint",
    unlockDescTextMapHash: "vuint",
  },
}
