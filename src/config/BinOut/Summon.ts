import { ConfigDefault } from ".."

export const Summon: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    monsterID: "vuint",
    born: "ConfigBornType",
    bornSlotIndex: "vuint",
    faceToTarget: "AbilityTargetting",
    summonTag: "vuint",
    aliveByOwner: "bool",
    isElite: "bool",
    affixList: "vuint[]",
    levelDelta: "DynamicInt",
    hasDrop: "bool",
    hasExp: "bool",
    sightGroupWithOwner: "bool",
  },
}
