import { ConfigDefault } from "../"

export const MechanicusDifficultyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vuint",
    descTextMapHash: "vuint",
    dungeonList: "vuint[]",
    coinRate: "vuint",
    buildGearLimit: "vuint",
  },
}