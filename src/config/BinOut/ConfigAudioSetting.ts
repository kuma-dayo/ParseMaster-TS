import { ConfigDefault } from "../"

export const ConfigAudioSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    globalVolume: "AudioSettingSlider_PostEvent",
    sfxVolume: "AudioSettingSlider_PostEvent",
    musicVolume: "AudioSettingSlider_PostEvent",
    voiceVolume: "AudioSettingSlider_PostVoice",
    vibration: "VibrationSetting",
    dualSenseRTPC: "ConfigWwiseString",
    dynamicRangeRTPCKey: "ConfigWwiseString",
    outputSettingMap: "map<vint,OutputSetting>",
    platformSettings: "map<string,AudioPlatformSetting>",
    vibrationLevel: "AudioSettingDropdown",
    vibrationIntensity: "AudioSettingSlider_Simple",
  },
}