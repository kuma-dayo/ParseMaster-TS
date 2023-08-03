import { ConfigDefault } from "../"

export const MonsterRelOverloadExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    listenType: "MonsterPolyDropListenType",
    listenParamStr: "string",
    polyMonsterDropConfigList: "PolyMonsterDropConfig[]",
  },
}
