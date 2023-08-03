import { ConfigDefault } from "../"

export const TreasureMapExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activity_id: "vuint",
    preview_reward_id: "vuint",
    npc_id: "vuint",
    npc_pos: "float[]",
    treasure_days: "vuint",
    quest_id: "vuint",
    monster_probability: "float",
    reward_worktop_gadget_id: "vuint",
    token_material_id: "vuint",
    unit_token_drop_id: "vuint",
    mp_reward_id: "vuint",
    host_reward_limit: "vuint",
    guest_reward_limit: "vuint",
    mp_challenge_index: "vuint",
    bonus_challenge_index: "vuint",
    challenge_gadget_suite: "vuint",
    spot_revise_level_id: "vuint",
    detector_material_id: "vuint",
    guide_child_quest_id: "vuint",
    front_child_quest_id: "vuint",
  },
}
