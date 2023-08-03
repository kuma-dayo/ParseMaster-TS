import { ConfigDefault } from "../"

export const ConfigMoveToAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    moveType: "MoveToType",
    routeList: "Vector[]",
    exactlyMove: "bool",
    moveDirType: "MoveToDirectionType",
    closeNavMesh: "bool",
    directMoveSpeed: "float",
  },
}
