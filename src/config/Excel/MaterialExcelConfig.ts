//Auto Generated by ConfigParser
import { ConfigDefault } from ".."

export const MaterialExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ItemConfig",
  Fields: {
    interactionTitleTextMapHash: "vuint",
    materialType: "MaterialType",
    cdTime: "vuint",
    cdGroup: "vuint",
    stackLimit: "vuint",
    maxUseCount: "vuint",
    useOnGain: "bool",
    noFirstGetHint: "bool",
    playGainEffect: "bool",
    useTarget: "ItemUseTarget",
    itemUse: "ItemUseConfig[]",
    rankLevel: "vuint",
    foodQuality: "FoodQualityType",
    effectDescTextMapHash: "vuint",
    specialDescTextMapHash: "vuint",
    typeDescTextMapHash: "vuint",
    effectIcon: "string",
    effectGadgetID: "vuint",
    effectName: "string",
    picPath: "string[]",
    isSplitDrop: "bool",
    closeBagAfterUsed: "bool",
    satiationParams: "vuint[]",
    destroyRule: "MaterialDestroyType",
    destroyReturnMaterial: "vuint[]",
    destroyReturnMaterialCount: "vuint[]",
    setID: "vuint",
    isHidden: "bool",
    isForceGetHint: "bool",
  },
}
