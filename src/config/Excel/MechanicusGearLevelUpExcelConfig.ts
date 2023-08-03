import { ConfigDefault } from "../"

export const MechanicusGearLevelUpExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    gearID: "vuint",
    gearLevel: "vuint",
    gearLevelUpMoney: "vuint",
    gearNameTextMapHash: "vuint",
    gearShortNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    gearIconPath: "string",
    attack: "vuint",
    attackSpeed: "vuint",
    attackRange: "vuint",
    build_cost: "vuint",
    demolition_refund: "vuint",
    globalValueParam: "SGVConfig[]",
    effectList: "vuint[]",
  },
}