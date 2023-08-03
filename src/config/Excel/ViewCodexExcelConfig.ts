import { ConfigDefault } from "../"

export const ViewCodexExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    gadgetId: "vuint",
    sceneId: "vuint",
    groupId: "vuint",
    configId: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    image: "string",
    cityId: "vuint",
    worldAreaId: "vuint",
    SortOrder: "vuint",
    isDisuse: "bool",
    showOnlyUnlocked: "bool",
  },
}