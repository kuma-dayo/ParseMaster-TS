import { ConfigDefault } from "."

export const AvatarExcelConfig: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: "CreatureExcelConfig",
  Fields: {
    useType: "AvatarUseType",
    bodyType: "BodyType",
    scriptDataPathHash: "vuint",
    iconName: "string",
    sideIconName: "string",
    qualityType: "QualityType",
    chargeEfficiency: "float",
    healAdd: "float",
    healedAdd: "float",
    combatConfigHash: "vuint",
    isRangeAttack: "bool",
    initialWeapon: "vuint",
    weaponType: "WeaponType",
    manekinPathHash: "vuint",
    imageName: "string",
    gachaCardNameHash: "vuint",
    gachaImageNameHash: "vuint",
    coopPicNameHash: "vuint",
    cutsceneShow: "string",
    skillDepotId: "vuint",
    staminaRecoverSpeed: "float",
    candSkillDepotIds: "vuint[]",
    manekinJsonConfigHash: "vuint",
    manekinMotionConfig: "vuint",
    descTextMapHash: "vuint",
    avatarIdentityType: "AvatarIdentityType",
    avatarPromoteId: "vuint",
    avatarPromoteRewardLevelList: "vuint[]",
    avatarPromoteRewardIdList: "vuint[]",
    featureTagGroupID: "vuint",
    infoDescTextMapHash: "vuint",
    animatorConfigPathHash: "vuint",
    animatorConfigPathHashPre: "vuint",
  },
}
