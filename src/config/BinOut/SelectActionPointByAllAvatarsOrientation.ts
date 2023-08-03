import { ConfigDefault } from "../"

export const SelectActionPointByAllAvatarsOrientation: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigActionPointSelectType",
  Fields: {
    actionPointIDs: "vuint[]",
    angle: "float",
    distance: "float",
    signType: "bool",
  },
}
