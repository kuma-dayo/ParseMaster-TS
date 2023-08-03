import { ConfigDefault } from "../"

export const RegionSearchRegionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    regionCenter: "float[]",
    regionRadius: "float",
    oneoffGroupList: "vuint[]",
    oneoffGroupNum: "vuint",
    recycleGroupList: "vuint[]",
    recycleGroupNum: "vuint",
    recycleType: "RegionSearchRecycleType",
    recycleParam: "vuint",
  },
}
