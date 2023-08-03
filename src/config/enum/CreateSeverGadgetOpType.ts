import { EnumDefault } from "."

enum types {
  None = 1,
  Retract = 2,
  RetractAndCreate = 3,
}

export const CreateSeverGadgetOpType: EnumDefault = {
  __signed: true,
  types: types,
}
