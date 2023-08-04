import { ConfigDefault } from ".."

export const ConfigSliceFrameWatch: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    amortizedTickMassiveEntityBudget: "float",
    sharedSliceFrameGameSystemTime: "float",
    resourcesManagerAssetJobMinTime: "float",
    resourcesManagerAssetJobMaxTime: "float",
    resourcesManagerInstantiateMinTime: "float",
    resourcesManagerInstantiateMaxTime: "float",
    resourcesManagerUnloadMinTime: "float",
    resourcesManagerUnloadMaxTime: "float",
    resourcesManagerInstantiateJobTime: "float",
    levelAppearDisappearTimeMSDefault: "float",
    levelAppearDisappearWRRWeight: "vint",
    InitComponentCommonSlicingTimeDefault: "float",
    removeEntityTimeMSDefault: "float",
    removeEnityWRRWeight: "vint",
    sectrWRRWeightDefault: "vint",
    timerManagerTimeMS: "float",
    UseLegacyGenericObjectPool: "bool",
    significanceTaskThreadLOD: "vint",
    loadingUseSyncLoad: "bool",
  },
}
