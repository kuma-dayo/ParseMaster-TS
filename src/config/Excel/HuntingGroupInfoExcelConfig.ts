import { ConfigDefault } from "../"

export const HuntingGroupInfoExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    groupId: "vuint",
    regionId: "vuint",
    pointType: "HuntingCluePointType",
    refIndex: "vuint[]",
    posType: "HuntingMonsterCreatePosType",
  },
}
