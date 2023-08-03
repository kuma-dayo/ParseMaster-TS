import { EnumDefault } from "."

enum types {
  LOOP = 0,
  NORMAL = 1,
  CLAMP = 2,
}

export const FrameFaceAnimationPlayType: EnumDefault = {
  __signed: true,
  types: types,
}
