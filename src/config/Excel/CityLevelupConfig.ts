import { ConfigDefault } from "../"

export const CityLevelupConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scene_id: "vuint",
    city_id: "vuint",
    level: "vuint",
    consume_item: "WorldAreaLevelupConsumeItem",
    rewardID: "vuint",
    action_vec: "WorldAreaLevelupAction[]",
  },
}
