import { ConfigDefault } from "../"

export const InferenceWordExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    wordId: "vuint",
    pageId: "vuint",
    defaultUnlock: "bool",
    isCanInterpret: "bool",
    interpretAction: "InferenceAction[]",
    isCanAssociate: "bool",
    associateWordId: "vuint",
    associateAction: "InferenceAction[]",
    IDNMEDHKCLM: "vuint",
    PLOFLIMBHNE: "vuint",
    ADNABCBGOPL: "vuint",
    EMIBNHOHKCD: "vuint",
    EMPCFJBNCFD: "bool",
  },
}
