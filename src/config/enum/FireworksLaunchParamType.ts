import { EnumDefault } from "."

enum types {
  FIREWORKS_LAUNCH_PARAM_NONE = 0,
  FIREWORKS_LAUNCH_PARAM_REPEAT = 1,
  FIREWORKS_LAUNCH_PARAM_INTEVAL = 2,
  FIREWORKS_LAUNCH_PARAM_DELAY = 3,
  FIREWORKS_LAUNCH_PARAM_ROUND_INTEVAL = 4,
}

export const FireworksLaunchParamType: EnumDefault = {
  __signed: true,
  types: types,
}
