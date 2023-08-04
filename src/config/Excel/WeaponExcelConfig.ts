import { ConfigDefault } from ".."

export const WeaponExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "ItemConfig",
  Fields: {
    weaponType: "WeaponType",
    rankLevel: "vuint",
    materialType: "WeaponMaterialType",
    elemType: "ElementType",
    isGold: "bool",
    weaponBaseExp: "vuint",
    skillAffix: "vuint[]",
    awakenMaterial: "vuint",
    weaponProp: "WeaponProperty[]",
    awakenTexture: "string",
    awakenLightMapTexture: "string",
    awakenIcon: "string",
    unRotate: "bool",
    weaponPromoteId: "vuint",
    storyId: "vuint",
    awakenCosts: "vuint[]",
    gachaCardNameHash: "vuint",
    enhanceRule: "vuint",
    destroyRule: "MaterialDestroyType",
    destroyReturnMaterial: "vuint[]",
    destroyReturnMaterialCount: "vuint[]",
    initialLockState: "vuint",
  },
}
