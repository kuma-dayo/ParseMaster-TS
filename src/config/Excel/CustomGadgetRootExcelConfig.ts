import { ConfigDefault } from "../"

export const CustomGadgetRootExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    rootGadgetID: "vuint",
    contextType: "CustomGadgetRootType",
    pageTitle: "string",
    recommendConfig: "string",
    tabList: "vuint[]",
    NJADHPMNLDD: "vuint[]",
  },
}
