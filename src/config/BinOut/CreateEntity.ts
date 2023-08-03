import { ConfigDefault } from "../"

export const CreateEntity: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    ownerIsTarget: "bool",
    ownerIs: "AbilityTargetting",
    propOwnerIs: "AbilityTargetting",
    lifeByOwnerIsAlive: "bool",
    born: "ConfigBornType",
    checkGround: "CheckGround",
    sightGroupWithOwner: "bool",
    isPeerIdFromPlayer: "bool",
    lifeByOwnerV2: "bool",
    dontKillSelfByClientPrediction: "bool",
  },
}
