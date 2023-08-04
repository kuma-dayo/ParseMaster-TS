import { ConfigDefault } from ".."

export const ConfigRegionPerf: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    areaIdarray: "vuint[]",
    textureStreamingBudget: "float",
    streamingProfileRatioConfigName: "string",
    disableCommonPreload: "bool",
    disableEntityPreloadEffect: "bool",
    requirementArray: "ConfigGraphicsRequirement[]",
    hizAabbscale: "float",
    distantShadowBound: "float",
    maxShadowQuality: "ShadowQuality",
    maxShadowResolution: "ConfigShadowResolution",
    textureStreamingEnableAdjust: "vint",
    textureStreamingGuardMin: "float",
    textureStreamingGuardMax: "float",
    textureStreamingNearProtectDistance: "float",
    textureStreamingNearMipLevelMin: "vint",
    textureStreamingEnableImportantRenderer: "vint",
    textureStreamingCustomFallback: "vint",
    textureStreamingFallbackGuard: "float",
  },
}
