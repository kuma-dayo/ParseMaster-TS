import { ConfigDefault } from ".."

export const HomeWorldFurnitureTypeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    typeID: "vuint",
    typeCategoryID: "vuint",
    typeNameTextMapHash: "vuint",
    typeName2TextMapHash: "vuint",
    tabIcon: "string",
    sceneType: "FurnitureDeployType",
    cameraID: "vuint",
    bagPageOnly: "vuint",
    isShowInBag: "bool",
    limit: "vuint",
  },
}
