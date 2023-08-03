import { ConfigDefault } from "../"

export const ConfigGadgetUIBase: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    gadgetUIBtnCfgPath: "string",
    uiName: "string",
    onTouch: "TouchInteractType",
    touchParams: "string[]",
    showCombType: "LogicType",
    showCondTypes: "GadgetUIItemShowCondType[]",
    postGadgetActionParams: "float[]",
    icon: "string",
    groupName: "string",
    itemType: "GadgetInteractItemType",
    needDialogConfirm: "bool",
    confirmDialogTitle: "string",
    confirmDialogContent: "string",
  },
}