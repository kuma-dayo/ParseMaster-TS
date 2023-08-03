import { EnumDefault } from "."

enum types {
  Never = 0,
  ExitStage = 1,
  Cooldown = 2,
}

export const SoundBankUnloadPolicy: EnumDefault = {
  __signed: true,
  types: types,
}