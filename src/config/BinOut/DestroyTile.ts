import { ConfigDefault } from "../"

export const DestroyTile: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    tileName: "string",
    attackPattern: "ConfigBaseAttackPattern",
  },
}