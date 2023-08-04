import { ConfigDefault } from ".."

export const TreasureMapRegionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    unlock_day: "vuint",
    token_num: "vuint",
    region_center: "float[]",
    region_radius: "vuint",
    region_entry_id: "vuint",
    group_list: "vuint[]",
    revise_level: "vuint",
    spot_num_list: "vuint[]",
    token_num_list: "vuint[]",
    misc_drop_prob_list: "vuint[]",
    misc_drop_id: "vuint",
    mp_group_id: "vuint",
    backup_group_list: "vuint[]",
    mp_token_threshold: "vuint",
    mp_type_id: "vuint",
    mp_position: "float[]",
    mp_descTextMapHash: "vuint",
    mp_reward_preview_id: "vuint",
    fragment_bonus_id: "vuint",
  },
}
