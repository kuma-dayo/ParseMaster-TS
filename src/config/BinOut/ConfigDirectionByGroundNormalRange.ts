import { ConfigDefault } from ".."

export const ConfigDirectionByGroundNormalRange: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBornDirectionType",
  Fields: {
    range: "vuint",
    checkOffset: "bool",
    offset: "Vector",
  },
}
