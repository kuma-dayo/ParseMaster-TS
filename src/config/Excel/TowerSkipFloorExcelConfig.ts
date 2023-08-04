import { ConfigDefault } from ".."

export const TowerSkipFloorExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    prev_level_index: "vuint",
    cur_level_index: "vuint",
  },
}
