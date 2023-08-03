import { ConfigDefault } from "../"

export const ConfigAttackUsePrefab: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseAttackPattern",
  Fields: {
    prefabPathName: "string",
    isConnect: "bool",
    duration: "float",
  },
}
