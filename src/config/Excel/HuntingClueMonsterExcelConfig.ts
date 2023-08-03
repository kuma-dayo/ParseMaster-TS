import { ConfigDefault } from "../"

export const HuntingClueMonsterExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    configId: "vuint",
    monsterId: "vuint",
    reviseLevelId: "vuint",
    groupType: "HuntingMonsterGroupType",
    monsterGroupId: "vuint",
    level: "vuint",
    isClueMonster: "bool",
  },
}
