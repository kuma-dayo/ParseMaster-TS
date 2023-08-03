import { ConfigDefault } from "../"

export const MechanicusMapExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    mechanicusMapID: "vuint",
    mapNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    unlockTipsTextMapHash: "vuint",
    mapIconPath: "string",
    buildGearLimit: "vuint",
    dungeonID: "vuint",
  },
}