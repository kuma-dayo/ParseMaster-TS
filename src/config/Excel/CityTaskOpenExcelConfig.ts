import { ConfigDefault } from ".."

export const CityTaskOpenExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    cityId: "vuint",
    questId: "vuint",
    backupVec: "vuint[]",
  },
}
