import { ConfigDefault } from "../"

export const ConfigCrowdSpawnInfo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    crowdTypeID: "vint",
    animConfigID: "vint",
    spawnPosition: "Vector",
    spawnFaceFwd: "Vector",
    hasCollider: "bool",
    sitOnChair: "bool",
    hairColor: "ColorVector",
    bodyColors: "ColorVector[]",
    hatColors: "ColorVector[]",
    screwColors: "ColorVector[]",
    instanceId: "vint",
    spawnGrade: "ConfigCrowdInstSpawnGradeEnum",
  },
}
