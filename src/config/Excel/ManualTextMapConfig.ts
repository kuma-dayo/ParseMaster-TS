import { ConfigDefault } from "../"

export const ManualTextMapConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    textMapId: "string",
    textMapContentTextMapHash: "vuint",
    paramTypes: "TextParamType[]",
  },
}
