import { ConfigDefault } from "../"

export const LoadingSituationExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageID: "vuint",
    loadingSituationType: "LoadingTipsSituationType",
    sceneID: "vuint[]",
    area1_ID: "vuint[]",
    areaTerrainType: "LoadingAreaType",
    picPath: "string",
  },
}
