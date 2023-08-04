import { ConfigDefault } from ".."

export const ConfigJudgeCrowdInViewByCrowdTypeID: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigJudgeNodeBase",
  Fields: {
    scanCrowdTypeList: "vuint[]",
    targetYoffset: "float",
    scanAreaType: "ScanAreaType",
    widthRatio: "float",
    heightRatio: "float",
    scanRangeNearZ: "float",
    scanRangeFarZ: "float",
    scanEnableRayCast: "bool",
  },
}
