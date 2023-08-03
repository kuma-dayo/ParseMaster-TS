import { EnumDefault } from "."

enum types {
  REUNION_GUIDE_OP_TYPE_NONE = 0,
  REUNION_GUIDE_OP_TYPE_AND = 1,
  REUNION_GUIDE_OP_TYPE_OR = 2,
  REUNION_GUIDE_OP_TYPE_NOT = 3,
}

export const ReunionGuideOpType: EnumDefault = {
  __signed: true,
  types: types,
}
