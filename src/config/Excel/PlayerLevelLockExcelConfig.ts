import { ConfigDefault } from ".."

export const PlayerLevelLockExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    worldLevel: "vuint",
    unlockMainQuestId: "vuint",
    unlockPlayerLevel: "vuint",
    playerLevelUpperLimit: "vuint",
    unlockDescTextMapHash: "vuint",
  },
}
