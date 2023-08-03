import { EnumDefault } from "."

enum types {
  None = 1,
  Graven = 2,
}

export const ScanCameraType: EnumDefault = {
  __signed: true,
  types: types,
}
