import { ConfigDefault } from ".."

export const ConfigBoundary: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    name: "string",
    priority: "vint",
    shape: "string",
    offset: "Vector",
    euler: "Vector",
    height: "float",
  },
}
