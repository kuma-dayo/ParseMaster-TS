import { ConfigDefault } from "../"

export const ConfigLocalGadgetOP: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    gadgetId: "vuint",
    subKey: "vuint",
    oprCode: "vint",
    position: "Vector",
    euler: "Vector",
    gvKey: "string",
    gvValue: "float",
    moveDatas: "ConfigLocalGadgetMoveOp[]",
    cmdList: "ConfigLocalGadgetCmd[]",
  },
}
