import { ConfigDefault } from ".."

export const AsterMidDifficultyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    world_level_vec: "vuint[]",
    drop_id: "vuint",
    reward_id: "vuint",
    resin: "vuint",
    recommendLevel: "vuint",
    monsterLevel: "vuint",
  },
}
