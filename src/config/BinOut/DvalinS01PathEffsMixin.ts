import { ConfigDefault } from "../"

export const DvalinS01PathEffsMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    effectStart: "vint",
    effectEnd: "vint",
    effInfos: "DvalinS01PathEffsInfo[]",
  },
}
