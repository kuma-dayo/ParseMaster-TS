import { ConfigDefault } from "../"

export const ConfigWidgetGadget: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    maxCountInScene: "vuint",
    maxCountByPlayer: "vuint",
    isCombatDestroy: "bool",
    combatDestroyDistance: "float",
    isDistanceDestroy: "bool",
    distanceDestroyDistance: "float",
    isHasCollision: "bool",
    collisionIncludeNpc: "bool",
    collisionIncludeWater: "bool",
    radius: "float",
    distanceToAvatar: "float",
    createHeight: "float",
    createRot: "Vector",
    isLeaveSceneDestroy: "bool",
  },
}
