import { ConfigDefault } from ".."

export const HomeWorldSpecialFurnitureExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    furnitureID: "vuint",
    sceneID: "vuint",
    gadgetID: "vuint[]",
  },
}
