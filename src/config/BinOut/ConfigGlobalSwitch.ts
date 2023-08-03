import { ConfigDefault } from "../"

export const ConfigGlobalSwitch: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    enableMultiPlayer: "bool",
    enableAnimatorInterleave: "bool",
    enableMixinModifierDetachCallback: "bool",
    enablePacketProcessTimeLimit: "bool",
    enableUITempFix: "bool",
    enableEquipDataItemFix: "bool",
    cacheEntityLightDeActive: "bool",
    enablemaxDelayPacketMs: "bool",
    maxDelayPacketMs: "vuint",
    enableForceSyncPostion: "bool",
    maxForceDistance: "float",
    enableAbilityInvokeAfterReady: "bool",
  },
}
