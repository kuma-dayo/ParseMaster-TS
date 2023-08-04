import { ConfigDefault } from ".."

export const TriggerBullet: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    bulletID: "vuint",
    born: "ConfigBornType",
    ownerIsTarget: "bool",
    ownerIs: "AbilityTargetting",
    propOwnerIs: "AbilityTargetting",
    lifeByOwnerIsAlive: "bool",
    trackTarget: "AbilityTargetting",
    trackTargetList: "SingleTarget[]",
    sightGroupWithOwner: "bool",
    isPeerIdFromPlayer: "bool",
    lifeByOwnerV2: "bool",
    dontKillSelfByClientPrediction: "bool",
    campFollowPropOwner: "bool",
    flushAbilityPacket: "bool",
  },
}
