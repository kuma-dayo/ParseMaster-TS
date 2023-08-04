import { ConfigDefault } from ".."

export const BartenderOrderExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    formulaId: "vuint",
    affixId: "vuint[]",
    cupType: "BartenderCupType",
    time: "vuint",
    score: "vuint",
    iconName: "string",
    descTextMapHash: "vuint",
  },
}
