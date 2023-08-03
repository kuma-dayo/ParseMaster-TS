import { ConfigDefault } from "../"

export const ConfigMapGlobal: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    miniMapUIRadius: "float",
    miniMapSightRadius: "float",
    miniMapScaleDefault: "float",
    miniMapScaleRanks: "float[]",
    levelMapScaleDefault: "float",
    levelMapScaleMax: "float",
    levelMapScaleMin: "float",
    levelMapTransPointRadius: "float",
    levelMapCustomMarkCancelRadius: "float",
    levelMapCustomMarkNearCancelRadius: "float",
    customStyles: "ConfigVCustomMapMark[]",
    MarkNearThreshold: "float",
    MarkSelectedScale: "float",
    RewardTipSlideValue: "float",
    FirstAreaIDHideMiniMap: "vuint",
    MarkUnlockEffectDelay: "float",
  },
}