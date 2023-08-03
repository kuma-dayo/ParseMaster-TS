import { ConfigDefault } from "../"

export const AsterLittleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stage_id: "vuint",
    next_stage_id_vec: "vuint[]",
    open_day: "vuint",
    mission_vec: "vuint[]",
    watcher_id_vec: "vuint[]",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}
