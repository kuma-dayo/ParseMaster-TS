import { ConfigDefault } from "../"

export const TransPointRewardConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scene_id: "vuint",
    point_id: "vuint",
    reward_id: "vuint",
    group_id_vec: "vuint[]",
    unlock_area_id_vec: "vuint[]",
  },
}
