import { ConfigDefault } from "../"

export const FlightActivityExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activity_id: "vuint",
    preview_reward_id: "vuint",
    start_quest_id: "vuint",
    npc_id: "vuint",
    medal_id: "vuint[]",
    daily_factor_vec: "FlightDailyPointFactor[]",
  },
}
