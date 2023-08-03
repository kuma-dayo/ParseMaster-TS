import { EnumDefault } from "."

enum types {
  OnlyHitBox = 0,
  OnlyHitScene = 1,
  OnlyHitMassiveEntity = 2,
  Both = 3,
}

export const CheckHitLayerType: EnumDefault = {
  __signed: true,
  types: types,
}
