import { ConfigDefault } from ".."

export const WorldExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    type: "WorldType",
    mainSceneId: "vuint",
    subSceneIdVec: "vuint[]",
  },
}
