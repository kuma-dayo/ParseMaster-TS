import { ConfigDefault } from ".."

export const BlossomGroupsExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    cityId: "vuint",
    sectionId: "vuint",
    refreshTypeVec: "vuint[]",
    newGroupVec: "vuint[]",
    decorateGroupVec: "vuint[]",
    nextCampIdVec: "vuint[]",
    is_safe: "bool",
    is_initial_refresh: "bool",
    finish_progress: "vuint",
    limit_level: "vuint",
    fight_radius: "vuint",
    remind_radius: "vuint",
    blossom_tipsTextMapHash: "vuint",
    delay_unload_sec: "vuint",
  },
}
