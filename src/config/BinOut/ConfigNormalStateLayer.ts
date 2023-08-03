import { ConfigDefault } from "../"

export const ConfigNormalStateLayer: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseStateLayer",
  Fields: {
    stateIDs: "map<string,ConfigNormalStateIDInfo>",
  },
}