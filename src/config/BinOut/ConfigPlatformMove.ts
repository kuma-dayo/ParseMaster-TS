import { ConfigDefault } from "../"

export const ConfigPlatformMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigMove",
  Fields: {
    AvatarTriggerEventDistance: "float",
    IsMovingWater: "bool",
    calcMoveStateInTick: "bool",
    route: "ConfigRoute",
    delayType: "MovePlatformDelayType",
  },
}
