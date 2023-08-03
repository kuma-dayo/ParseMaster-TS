import { ConfigDefault } from "../"

export const CollisionMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    collision: "ConfigCollision",
    minShockSpeed: "float",
    cd: "float",
    onCollision: "ConfigAbilityAction[]",
  },
}