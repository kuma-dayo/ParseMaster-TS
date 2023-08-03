import { ConfigDefault } from "../"

export const FishStockExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    type: "FishStockType",
    fishWeight: "map<vuint,vuint>",
  },
}
