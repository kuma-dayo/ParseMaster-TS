import { ConfigDefault } from "../"

export const TreasureMapBonusRegionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    unlock_region_id: "vuint",
    group_id: "vuint",
    reward_id: "vuint",
    reward_preview_id: "vuint",
    revise_level: "vuint",
    map_titleTextMapHash: "vuint",
    map_descTextMapHash: "vuint",
    show_image: "string",
    fragment_num: "vuint",
    region_center: "float[]",
    region_radius: "vuint",
  },
}