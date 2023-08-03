import { EnumDefault } from "."

enum types {
  None = 0,
  OpenPage = 1,
  ClosePage = 2,
  v3_0_RobotControl_ButtonDown = 3,
  v3_1_RobotControl_FireBullet = 4,
}

export const UIInteractMesaage: EnumDefault = {
  __signed: true,
  types: types,
}
