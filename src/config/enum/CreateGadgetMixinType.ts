import { EnumDefault } from "."

enum types {
  OnlyOriginOwner = 0,
  OnlySubOwner = 1,
  BothOwner = 2,
}

export const CreateGadgetMixinType: EnumDefault = {
  __signed: true,
  types: types,
}
