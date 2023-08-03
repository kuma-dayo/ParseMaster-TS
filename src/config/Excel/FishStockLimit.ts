import { ConfigDefault } from "../"

export const FishStockLimit: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: null,
  Fields: {
    stockType: "FishStockType",
    minNum: "vuint",
    maxNum: "vuint",
  },
}
