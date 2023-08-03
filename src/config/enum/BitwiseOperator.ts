import { EnumDefault } from "."

enum types {
  AND = 0,
  OR = 1,
  NOT = 2,
  XOR = 3,
}

export const BitwiseOperator: EnumDefault = {
  __signed: true,
  types: types,
}
