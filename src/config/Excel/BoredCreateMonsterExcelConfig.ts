import { ConfigDefault } from "../"

export const BoredCreateMonsterExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    player_level: "vuint",
    monster_config_vec: "BoredMonsterConfig[]",
  },
}
