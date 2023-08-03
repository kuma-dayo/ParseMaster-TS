import { ConfigDefault } from "../"

export const ExhibitionCardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    styleTextMapHash: "vuint",
    priority: "vuint",
    orderType: "ExhibitionCardOrderType",
  },
}
