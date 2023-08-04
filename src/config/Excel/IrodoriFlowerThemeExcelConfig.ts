import { ConfigDefault } from ".."

export const IrodoriFlowerThemeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    themeId: "vuint",
    gadgetId: "vuint",
    unlockDay: "vuint",
    themeTitleTextMapHash: "vuint",
    themeDescTextMapHash: "vuint",
    themeTargetTextMapHash: "vuint",
    targetPictureHash: "vuint",
    timeLimit: "float",
    flowerId: "vuint[]",
    stageUnlockCondId: "vuint",
    themeUnlockCondId: "vuint",
    watcherId: "vuint",
    questId: "vuint",
  },
}
