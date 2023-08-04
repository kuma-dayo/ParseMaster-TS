import { ConfigDefault } from ".."

export const ConfigAudioAvatar: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    voiceSwitchKey: "ConfigWwiseString",
    bodyTypeSwitchKey: "ConfigWwiseString",
    weaponPutAwayAnimStateWhitelist: "string[]",
    weapon_attach_state: "WeaponAttachState",
    energyRatioRtpc: "ConfigWwiseString",
    teamHpRTPC: "ConfigWwiseString",
    teamHpAliveRatio: "float",
    avatarAccessTypeSwitchGroup: "ConfigWwiseString",
    localAvatarSwitchValue: "ConfigWwiseString",
    remoteAvatarSwitchValue: "ConfigWwiseString",
    motionAvatarTypeRtpcKey: "ConfigWwiseString",
  },
}
