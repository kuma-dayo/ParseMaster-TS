import { ConfigDefault } from "../"

export const LevelSuppressExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vint",
    levelSuppressDamageCo: "float",
    levelSuppressEndure: "float",
    levelSuppressDisMinHorizontal: "float",
    levelSuppressDisMaxHorizontal: "float",
    levelSuppressDisMinVertical: "float",
    levelSuppressDisMaxVertical: "float",
    isAttackerPlayer: "bool",
    isDefenserPlayer: "bool",
  },
}