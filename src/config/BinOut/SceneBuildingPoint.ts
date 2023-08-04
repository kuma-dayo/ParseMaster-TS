import { ConfigDefault } from ".."

export const SceneBuildingPoint: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigScenePoint",
  Fields: {
    buildingType: "SceneBuildingType",
    fogId: "vuint",
    showOnLockedArea: "bool",
    needSpecificTransPoint: "bool",
    specificTransPointId: "vuint",
  },
}
