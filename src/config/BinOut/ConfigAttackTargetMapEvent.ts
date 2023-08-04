import { ConfigDefault } from ".."

export const ConfigAttackTargetMapEvent: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    attackPattern: "ConfigBaseAttackPattern",
    attackInfoMap: "map<TargetType,ConfigAttackInfo>",
  },
}
