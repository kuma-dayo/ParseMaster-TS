import { ConfigDefault } from ".."

export const VehicleSkillDepotExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    skillIDList: "vuint[]",
  },
}
