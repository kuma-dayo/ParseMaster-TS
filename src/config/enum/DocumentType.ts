import { EnumDefault } from "."

enum types {
  Book = 0,
  Video = 1,
}

export const DocumentType: EnumDefault = {
  __signed: true,
  types: types,
}
