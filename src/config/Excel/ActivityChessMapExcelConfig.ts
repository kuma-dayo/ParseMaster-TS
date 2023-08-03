import { ConfigDefault } from "../"

export const ActivityChessMapExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    chessMapID: "vuint",
    mapNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    unlockTipsTextMapHash: "vuint",
    mapIconPath: "string",
    buildGearLimit: "vuint",
    dungeonID: "vuint",
    entryPointId: "vuint",
    unlockDay: "vuint",
    isTeachMap: "bool",
    prevMapID: "vuint",
    show: "bool",
    entrancePointIDList: "vuint[]",
    exitPointIDList: "vuint[]",
  },
}
