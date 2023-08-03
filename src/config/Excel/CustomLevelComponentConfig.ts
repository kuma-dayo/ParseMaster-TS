import { ConfigDefault } from "../"

export const CustomLevelComponentConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    componentID: "vuint",
    typeID: "vuint",
    componentNameTextMapHash: "vuint",
    tagDescTextMapHash: "vuint",
    componentIconHash: "vuint",
    brickName: "string",
    deployGadgetID: "vuint",
    serverGadgetID: "vuint",
    configLevel: "vuint",
    rotateType: "BrickRotateType",
    componentCost: "vuint",
    maxDeployCount: "vuint",
    handBookID: "vuint",
    isVisable: "bool",
    brickType: "BrickType",
    canCopy: "bool",
    componentDescTextMapHash: "vuint",
    componentSizeTextMapHash: "vuint",
    componentDeployTextMapHash: "vuint",
  },
}
