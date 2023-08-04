import { ConfigDefault } from ".."

export const MpPlayScoreExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    playType: "MpPlayType",
    param: "vuint[]",
    isCalcScore: "bool",
  },
}
