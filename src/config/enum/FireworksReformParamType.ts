import { EnumDefault } from "."

enum types {
  FIREWORKS_REFORM_PARAM_NONE = 0,
  FIREWORKS_REFORM_PARAM_COLOR = 1,
  FIREWORKS_REFORM_PARAM_HEIGHT = 2,
  FIREWORKS_REFORM_PARAM_SIZE = 3,
  FIREWORKS_REFORM_PARAM_DENSITY = 4,
  FIREWORKS_REFORM_PARAM_ROTATION = 5,
}

export const FireworksReformParamType: EnumDefault = {
  __signed: true,
  types: types,
}