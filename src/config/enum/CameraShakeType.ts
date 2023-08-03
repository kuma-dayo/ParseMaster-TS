import { EnumDefault } from "."

enum types {
  Center = 0,
  CustomVector = 1,
  HitVector = 2,
}

export const CameraShakeType: EnumDefault = {
  __signed: true,
  types: types,
}