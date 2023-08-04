import { ConfigDefault } from ".."

export const OpActivityBonusExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    bonusId: "vuint",
    sourceType: "OpActivityBonusSourceType",
    sourceParam: "string",
    openLevel: "vuint",
    bonusRatio: "vuint",
    textMapIdList: "string[]",
    trackType: "OpActivityTrackType",
    trackPara: "vuint[]",
    iconBackground: "vuint",
    iconForeground: "vuint",
  },
}
