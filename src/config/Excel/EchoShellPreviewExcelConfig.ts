import { ConfigDefault } from "../"

export const EchoShellPreviewExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    specialVoiceID: "vuint",
    specialVoiceUnlockCondID: "vuint",
    specialVoiceLockTipTextMapHash: "vuint",
    isBetaBlocked: "bool",
  },
}
