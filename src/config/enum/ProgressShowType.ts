import { EnumDefault } from "."

enum types {
  PROGRESSTYPE_NONE = 0,
  PROGRESSTYPE_FINISH = 1,
  PROGRESSTYPE_THOUSAND_TO_ONE = 2,
}

export const ProgressShowType: EnumDefault = {
  __signed: true,
  types: types,
}