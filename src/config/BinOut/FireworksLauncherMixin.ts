import { ConfigDefault } from "../"

export const FireworksLauncherMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    startCountDownModifier: "string",
    OnEvtStartCountDown: "ConfigAbilityAction[]",
    OnAllBulletsFired: "ConfigAbilityAction[]",
    GV_FW_BulletItemID: "string",
    GV_FW_ColorH: "string",
    GV_FW_Scale: "string",
    GV_FW_Angle: "string",
    GV_FW_MaxParticleCount: "string",
    GV_FW_FaceToCamera: "string",
    GV_FW_BulletLifeTime: "string",
  },
}
