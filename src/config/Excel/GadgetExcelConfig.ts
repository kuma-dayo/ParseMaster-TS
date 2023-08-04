import { ConfigDefault } from ".."

export const GadgetExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "EntityExcelConfig",
  Fields: {
    type: "EntityType",
    _HACK__1: "__HACK_",
    jsonName: "string",
    hasMove: "bool",
    hasAudio: "bool",
    isEquip: "bool",
    isInteractive: "bool",
    visionLevel: "VisionLevelType",
    tags: "string[]",
    clientScriptHash: "vuint",
    _HACK__11: "__HACK_",
    itemJsonName: "string",
    itemPrefabPathHash: "vuint",
    radarHintID: "vuint",
    inteeIconName: "string",
    landSoundID: "vuint",
    mpPropID: "vuint",
    interactNameTextMapHash: "vuint",
    chainId: "vuint",
    _HACK__21: "__HACK_",
    hasDynamicBarrier: "bool",
  },
}
