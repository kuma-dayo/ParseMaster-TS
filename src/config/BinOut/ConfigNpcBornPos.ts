import { ConfigDefault } from "../"

export const ConfigNpcBornPos: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    id: "vuint",
    configId: "vuint",
    roomId: "vuint",
    pos: "Vector",
    rot: "Vector",
    groupId: "vuint",
    suiteId: "vuint",
    suiteIdList: "vuint[]",
    preConditions: "NpcCommonCond[][]",
  },
}
