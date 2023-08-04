import { ConfigDefault } from ".."

export const RogueDungeonCellExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    dungeonId: "vuint",
    cellId: "vuint",
    cellCenterPos: "float[]",
    mapCoordinate: "vuint[]",
    adjacencyCellList: "vuint[]",
    groupId: "vuint",
    weightId: "vuint",
    operatorDeltaY: "float",
    doorOffset: "float",
    specialType: "RogueCellType",
    doorDeltaY: "float",
    isInitCell: "bool",
  },
}
