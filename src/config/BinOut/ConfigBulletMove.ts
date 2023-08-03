import { ConfigDefault } from "../"

export const ConfigBulletMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigMove",
  Fields: {
    speed: "float",
    maxSpeed: "float",
    minSpeed: "float",
    anglerVelocity: "float",
    acceleration: "float",
    accelerationTime: "float",
    canBornInWater: "bool",
    updateAngle: "ConfigBulletMoveAngle",
    delay: "float",
    stickToGround: "ConfigMoveStickToGround",
    syncToRemote: "bool",
    blockedByMonsterRadius: "float",
    useDefaultDirWhenOpposite: "bool",
  },
}
