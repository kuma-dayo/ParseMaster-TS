import { ConfigDefault } from ".."

export const FleurFairDungeonStatExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    galleryId: "vuint",
    statType: "FleurFairDungeonStatType",
    statParamList: "string[]",
    orderingType: "OrderingType",
    statMethod: "FleurFairDungeonStatMethod",
    priority: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}
