import { EnumDefault } from "."

enum types {
  Parent = 0,
  EntityForward = 1,
  NamedTransform = 2,
}

export const ControlPartForwardBy: EnumDefault = {
  __signed: true,
  types: types,
}
