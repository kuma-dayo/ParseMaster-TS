import { ConfigDefault } from "../"

export const IrodoriChessMapExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    mapId: "vuint",
    dungeonId: "vuint",
    entryPointId: "vuint",
    show: "bool",
    cardPool: "vuint[]",
    totalCardPoints: "vuint",
    singleGearLimits: "map<vuint,vuint>",
    entrancePointList: "vuint[]",
    exitPointList: "vuint[]",
    disorderList: "vuint[]",
    entryPageDisorderList: "vuint[]",
    initBuildingPoints: "vuint",
    isHardMap: "bool",
    mapNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    difficulty: "vuint",
    mapIconPath: "string",
    presetGearMap: "map<vuint,vuint>",
  },
}
