import { ConfigDefault } from "."

export const EntityExcelConfig: ConfigDefault = {
  isExcel: true,
  baseClass: null,
  Fields: {
    id: "vuint",
    nameTextMapHash: "vuint",
    prefabPathHash: "vuint",
    prefabPathRemoteHash: "vuint",
    controllerPathHash: "vuint",
    controllerPathRemoteHash: "vuint",
    campID: "vuint",
    LODPatternName: "string",
  },
}
