import { ConfigDefault } from ".."

export const ConfigRigidbodyMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigMove",
  Fields: {
    constSpeedRatio: "float",
    startCloseToGround: "bool",
    enableCloseToGroundWhenTick: "bool",
    followReferenceSystem: "bool",
    useAniamtorVelocity: "bool",
    enableSyncTransToServer: "bool",
    ignoreEnableRigidbodyDist: "bool",
  },
}
