import { ConfigDefault } from ".."

export const WorldAreaConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    SceneID: "vuint",
    AreaType: "WorldAreaType",
    AreaID_1: "vuint",
    AreaID_2: "vuint",
    AreaDefaultLock: "bool",
    AreaNameTextMapHash: "vuint",
    tower_point_id: "vuint",
    elementType: "ElementType",
    terrainType: "AreaTerrainType",
    showTips: "bool",
    minimapScale: "float",
  },
}
