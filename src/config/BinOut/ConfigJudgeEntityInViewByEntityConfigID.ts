import { ConfigDefault } from ".."

export const ConfigJudgeEntityInViewByEntityConfigID: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigJudgeNodeBase",
  Fields: {
    scanEntityList: "ConfigJudgeEntityInViewData[]",
    scanAreaType: "ScanAreaType",
    widthRatio: "float",
    heightRatio: "float",
    scanRangeNearZ: "float",
    scanRangeFarZ: "float",
    scanEnableRayCast: "bool",
    checkEntityActive: "bool",
  },
}
