import { ConfigDefault } from "../"

export const ConfigDialogSelectAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    talkIDList: "vuint[]",
    dialogIDList: "vuint[]",
    grpIDList: "vuint[]",
    useGrpId: "bool",
  },
}
