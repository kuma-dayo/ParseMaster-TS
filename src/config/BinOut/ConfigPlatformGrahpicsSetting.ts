import { ConfigDefault } from ".."

export const ConfigPlatformGrahpicsSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    volatileSettings: "map<VolatileType,ConfigGraphicsVolatileSetting>",
    deviceSettings: "map<string,ConfigGraphicsRecommendSetting>",
    targetFrameRate: "vuint",
    antialiasingMethod: "AntialiasingMethod",
    taaQuality: "TAAQuality",
    smaaQuality: "SMAAQuality",
    candidateVolatile: "VolatileType[]",
    postprocessEffectOptions: "map<OptionType,ConfigPostprocessEffectSetting>",
    particleEffectOptions: "map<OptionType,ConfigParticleEffectSetting>",
    comprehensiveQualityOptions: "map<OptionType,ConfigComprehensiveQualitySetting>",
    settingEntry: "ConfigGraphicsSettingEntry[]",
    performanceSettings: "map<string,ConfigPerformanceSetting>",
    globalTokenSettings: "ConfigGlobalToken",
    shadowQualitySettings: "map<ShadowQuality,ConfigShadowQualitySetting>",
    costRatioGrade: "map<PerfCostRatioGrade,float>",
    levelStreamingCostMap: "map<string,vint>",
    fadeDistanceQualitySettings: "map<FadeTintQualityLevel,ConfigTintFadeSetting>",
    deviceModelUseWidthMatchMode: "string[]",
  },
}
