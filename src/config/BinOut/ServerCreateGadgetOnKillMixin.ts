import { ConfigDefault } from "../"

export const ServerCreateGadgetOnKillMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    gadgetIDList: "vuint[]",
    campID: "vuint",
    campTargetType: "TargetType",
    randomCreate: "bool",
    useOriginOwnerAsGadgetOwner: "bool",
    lifeByOwnerIsAlive: "bool",
  },
}
