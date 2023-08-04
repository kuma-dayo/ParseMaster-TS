import { ConfigDefault } from ".."

export const CampExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    trophicLevel: "vuint",
    enemyCampList: "vuint[]",
  },
}
