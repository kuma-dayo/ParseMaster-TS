//Auto Generated by ConfigParser
import { ConfigDefault } from ".."

export const ConfigTrigger: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    triggerType: "EntityTriggerType",
    triggerFlag: "TriggerFlag",
    concernType: "ConcernType",
    shape: "string",
    offset: "Vector",
    eularOffset: "Vector",
    height: "float",
    fromShape: "string",
    fromOffset: "Vector",
    fromEularOffset: "Vector",
    fromHeight: "float",
    checkInfinite: "bool",
    triggerInfinite: "bool",
    lifeInfinite: "bool",
    startCheckTime: "float",
    checkInterval: "float",
    checkCount: "vint",
    triggerInterval: "float",
    triggerCount: "vint",
    lifeTime: "float",
    overwriteCampType: "bool",
    campType: "TargetType",
    checkPoint: "bool",
    useSurfaceHeight: "bool",
    useCollider: "bool",
    colliderName: "string",
    fromColliderName: "string",
    checkGhost: "bool",
    colliderCheckOnInit: "bool",
    checkOnReconnect: "bool",
    colliderWhiteList: "string[]",
    colliderBlackList: "string[]",
    useLevelOverride: "bool",
    rawShape: "ConfigBaseShape",
    useLocalTriggerLogic: "bool",
    localTriggerMeta: "ConfigLocalTriggerMeta",
  },
}
