import { ConfigDefault } from "../"

export const NahidaAimNpcGatherMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    detectRangeForNpc: "DynamicFloat",
    widthForNpc: "DynamicFloat",
    heightForNpc: "DynamicFloat",
    npcAttachEffect: "string",
    detectRangeForGather: "DynamicFloat",
    widthForGather: "DynamicFloat",
    heightForGather: "DynamicFloat",
    gatherIgnoreRaycastThreshold: "DynamicFloat",
    gatherMaxCount: "DynamicInt",
    disableRayCheck: "bool",
    gatherAttachEffect: "string",
  },
}
