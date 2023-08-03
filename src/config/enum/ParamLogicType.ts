import { EnumDefault } from "."

enum types {
  Replace = 0,
  Add = 1,
}

export const ParamLogicType: EnumDefault = {
  __signed: true,
  types: types,
}
