import { ConfigDefault } from "../"

export const AsterMidGroupsExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    group_id: "vuint",
    battle_group_vec: "vuint[]",
  },
}
