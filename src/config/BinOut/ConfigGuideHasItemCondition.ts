import { ConfigDefault } from "../"

export const ConfigGuideHasItemCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    itemIDLists: "vuint[][]",
    materialTypeList: "vint[]",
    type: "GuideItemType",
    notHave: "bool",
    value: "float",
  },
}