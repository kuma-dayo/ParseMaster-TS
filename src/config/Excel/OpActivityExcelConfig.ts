import { ConfigDefault } from "../"

export const OpActivityExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    opActivityId: "vuint",
    bonusType: "OpActivityBonusType",
    bonusValue: "vuint",
    bonusList: "vuint[]",
    icon: "vuint",
    tabText: "string",
    textMapIdList: "string[]",
  },
}
