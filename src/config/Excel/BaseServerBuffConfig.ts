import { ConfigDefault } from "../"

export const BaseServerBuffConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    serverBuffId: "vuint",
    serverBuffType: "ServerBuffType",
    abilityName: "string",
    modifierName: "string",
  },
}
