import { EnumDefault } from "."

enum types {
  OneByOne = 0,
  FirstFinishDelete = 1,
  AllFinishDelete = 2,
}

export const NeuronMixinRemoveOperatorType: EnumDefault = {
  __signed: true,
  types: types,
}
