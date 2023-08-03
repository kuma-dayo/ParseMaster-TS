import { ConfigDefault } from "../"

export const MechanicusCardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    costPoints: "vuint",
    cardType: "MechanicusCardType",
    effectID: "vuint",
    lastRound: "vuint",
    descTextMapHash: "vuint",
    descParamList: "string[]",
    gear_id: "vuint",
  },
}