import { ConfigDefault } from "../"

export const SelectActionPointByTargetOrientation: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigActionPointSelectType",
  Fields: {
    actionPointIDs: "vuint[]",
    angle: "float",
    signType: "bool",
  },
}
