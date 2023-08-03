import { ConfigDefault } from "../"

export const CityConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    cityId: "vuint",
    sceneId: "vuint",
    areaIdVec: "vuint[]",
    cityNameTextMapHash: "vuint",
    mapPosX: "vint",
    mapPosY: "vint",
    zoomForExploration: "float",
    adventurePointId: "vuint",
    ExpeditionMap: "string",
    ExpeditionWaterMark: "string",
    openState: "OpenStateType",
    cityGoddnessNameTextMapHash: "vuint",
    cityGoddnessDescTextMapHash: "vuint",
  },
}
