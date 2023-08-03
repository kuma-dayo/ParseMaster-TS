import { ConfigDefault } from "../"

export const FurnitureSuiteExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    suiteID: "vuint",
    jsonName: "string",
    suiteNameTextMapHash: "vuint",
    suiteDescTextMapHash: "vuint",
    drawingID: "vuint",
    favoriteNpcExcelIdVec: "vuint[]",
    transStr: "string",
    furnType: "vuint[]",
    itemIcon: "string",
    mapIcon: "string",
    interRatio: "float",
  },
}
