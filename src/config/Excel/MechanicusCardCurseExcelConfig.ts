import { ConfigDefault } from ".."

export const MechanicusCardCurseExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    effectID: "vuint",
    lastRound: "vuint",
    descTextMapHash: "vuint",
    descParamList: "string[]",
  },
}
