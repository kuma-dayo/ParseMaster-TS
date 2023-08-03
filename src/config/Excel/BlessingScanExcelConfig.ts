import { ConfigDefault } from "../"

export const BlessingScanExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    typeId: "vuint",
    scanType: "BlessingScanType",
    refId: "vuint",
    picUpConfig: "BlessingPicUpConfig[]",
    scanDuration: "vuint",
    scanTime: "vuint",
    hitBoxesNodeName: "string",
  },
}
