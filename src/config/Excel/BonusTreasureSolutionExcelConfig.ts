import { ConfigDefault } from ".."

export const BonusTreasureSolutionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    show_imageHash: "vuint",
    solution: "vuint[]",
  },
}
