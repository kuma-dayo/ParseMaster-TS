import { ConfigDefault } from ".."

export const MechanicBuildingExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    gadget_id: "vuint",
    specialEffectLevel1: "vuint",
    specialEffectLevel2: "vuint",
    specialEffectID1: "vuint",
    specialEffectID2: "vuint",
    specialEffectDesc1TextMapHash: "vuint",
    specialEffectDesc2TextMapHash: "vuint",
    maxLevel: "vuint",
    openConds: "SGVConfig[]",
    buildLimit: "vuint",
    isEnableRotate: "bool",
    defaultDungeonList: "vuint[]",
    elementType: "vuint",
  },
}
