import { ConfigDefault } from "../"

export const RegionSearchCondExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    searchNameTextMapHash: "vuint",
    searchDescTextMapHash: "vuint",
    searchMapDescTextMapHash: "vuint",
    groupId: "vuint",
    logicType: "LogicType",
    cond: "RegionSearchCond[]",
    regionList: "vuint[]",
    rewardId: "vuint",
    totalProgress: "vuint",
    reminderId: "vuint",
  },
}