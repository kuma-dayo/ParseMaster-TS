import { ConfigDefault } from "../"

export const ConfigFormulaicMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigMove",
  Fields: {
    timeControl: "UGCTimeControlType",
    formulaType: "UGCFormulaType",
    moveMode: "UGCMoveType",
    offTime: "float[]",
    automaticMove: "bool",
    polar: "UGCAxialType",
    angleSection: "float[]",
    angleStep: "float",
    isClockWise: "bool",
    angleSpeed: "float",
    period: "float[]",
    route: "Vector[]",
  },
}
