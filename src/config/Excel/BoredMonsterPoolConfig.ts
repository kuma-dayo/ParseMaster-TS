import { ConfigDefault } from "../"

export const BoredMonsterPoolConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    monster_id: "vuint",
    level: "vuint",
    dropTag: "string",
    affixVec: "vuint[]",
    isElite: "bool",
  },
}
