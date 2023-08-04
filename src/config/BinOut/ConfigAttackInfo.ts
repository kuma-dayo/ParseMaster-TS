import { ConfigDefault } from ".."

export const ConfigAttackInfo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    attackTag: "string",
    attenuationTag: "string",
    attenuationGroup: "string",
    attenuationRedirect: "AttenuationRedirect",
    attackProperty: "ConfigAttackProperty",
    hitPattern: "ConfigHitPattern",
    canHitHead: "bool",
    hitHeadPattern: "ConfigHitPattern",
    forceCameraShake: "bool",
    cameraShake: "ConfigCameraShake",
    bulletWane: "ConfigBulletWane",
    canBeModifiedBy: "CanBeModifiedBy",
  },
}
