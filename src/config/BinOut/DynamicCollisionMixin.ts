import { ConfigDefault } from "../"

export const DynamicCollisionMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    tags: "string[]",
    isChecker: "bool",
  },
}