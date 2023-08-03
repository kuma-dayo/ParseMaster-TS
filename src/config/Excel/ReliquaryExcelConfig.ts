import { ConfigDefault } from "../"

export const ReliquaryExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ItemConfig",
  Fields: {
    equipType: "EquipType",
    showPic: "string",
    rankLevel: "vuint",
    mainPropDepotId: "vuint",
    appendPropDepotId: "vuint",
    appendPropNum: "vuint",
    setId: "vuint",
    addPropLevels: "vuint[]",
    baseConvExp: "vuint",
    maxLevel: "vuint",
    storyId: "vuint",
    destroyRule: "MaterialDestroyType",
    destroyReturnMaterial: "vuint[]",
    destroyReturnMaterialCount: "vuint[]",
    initialLockState: "vuint",
  },
}
