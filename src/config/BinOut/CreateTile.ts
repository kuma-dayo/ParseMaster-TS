import { ConfigDefault } from "../"

export const CreateTile: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    tileName: "string",
    attackPattern: "ConfigBaseAttackPattern",
  },
}