import { ConfigDefault } from ".."

export const LanV2FireworksOverallDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scheduleId: "vuint",
    initStaminaValue: "vuint",
    fireElementAdditionList: "FireElementAdditionConfig[]",
    scoreFormulaExponent: "float",
    scoreFormulaOffset: "float",
    pushTipsId: "vuint",
  },
}
