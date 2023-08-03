import { ConfigDefault } from "../"

export const FurnitureMakeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    configID: "vuint",
    furnitureItemID: "vuint",
    count: "vuint",
    exp: "vuint",
    materialItems: "IdCountConfig[]",
    makeTime: "vuint",
    maxAccelerateTime: "vuint",
    quickFetchMaterialNum: "vuint",
  },
}
