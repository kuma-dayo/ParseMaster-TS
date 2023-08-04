import { ConfigDefault } from ".."

export const GadgetInteractExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    interactId: "vuint",
    actionType: "InteractActionType",
    param1: "vuint",
    param2: "vuint",
    actionList: "GadgetInteractActionConfig[]",
    isGuestInteract: "bool",
    _HACK__6: "__HACK_",
    costItems: "IdCountConfig[]",
    uiTitleTextMapHash: "vuint",
    uiDescTextMapHash: "vuint",
    condList: "GadgetInteractCond[]",
    condComb: "LogicType",
    isMpModeInteract: "bool",
  },
}
