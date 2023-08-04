import { ConfigDefault } from ".."

export const WorldAreaLevelupConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scene_id: "vuint",
    area_id: "vuint",
    level: "vuint",
    consume_item: "WorldAreaLevelupConsumeItem",
    rewardID: "vuint",
    action_vec: "WorldAreaLevelupAction[]",
  },
}
