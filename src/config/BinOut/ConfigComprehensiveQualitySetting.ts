import { ConfigDefault } from ".."

export const ConfigComprehensiveQualitySetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    localLightingShadow: "bool",
    terrainBlendDistance: "vint",
    shaderLODDistance: "vint",
    shaderQualityKeyword: "string",
    levelStreamingConfig: "string",
    enviroConfig: "string",
    uiCacheConfig: "string",
    lightViewDistanceRatio: "float",
    grassQuality: "GrassQualityLevel",
    lightOnLevel: "LightLevel",
    entityLODConfig: "string",
    enableRemoteAvatarLOD: "bool",
    enableDynamicLight: "bool",
    fadeTintDistance: "float",
    fadeTintSize: "float",
    textureStreamingBudget: "float",
    fadeTintQuality: "FadeTintQualityLevel",
    terrainDistance: "float",
    terrainNormal: "float",
    shellCount: "vint",
    shellMaxObjectsCount: "vint",
    useCrowdConeViewOptim: "bool",
    crowdMaxScreenNum: "vint",
    crowdConeViewUpdatePeriod: "vint",
    crowdMaxSpawnGrade: "ConfigCrowdInstSpawnGradeEnum",
  },
}
