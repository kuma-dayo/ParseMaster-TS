import { ConfigDefault } from "../"

export const DungeonPassExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    logicType: "LogicType",
    conds: "DungeonCondConfig[]",
  },
}