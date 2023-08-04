import { ConfigDefault } from ".."

export const BuffExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "BaseServerBuffConfig",
  Fields: {
    groupId: "vuint",
    name: "string",
    desc: "string",
    time: "float",
    stackType: "BuffStackType",
    isPersistent: "bool",
    isDelWhenLeaveScene: "bool",
  },
}
