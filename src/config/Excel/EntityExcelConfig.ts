import { ConfigDefault } from "../"

export const EntityExcelConfig: ConfigDefault = {
  attribute: ["excel"],
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
