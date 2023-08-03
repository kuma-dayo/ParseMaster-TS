import { EnumDefault } from "."

enum types {
  MoveCollider = 0,
  ScenePropCollider = 1,
}

export const EntityColliderType: EnumDefault = {
  __signed: true,
  types: types,
}
