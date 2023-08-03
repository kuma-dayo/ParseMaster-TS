import { ConfigDefault } from "../"

export const ConfigRandomQuestScheme: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    id: "vuint",
    freeStyleDic: "map<vuint,vint[]>",
    randomFreeStyleDic: "map<string,vint[]>",
  },
}