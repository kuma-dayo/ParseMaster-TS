import { ConfigDefault } from ".."

export const ConfigInputEventCheckWhiteList: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    globalWhiteList: "InputEventType[]",
    configContextInputEventWhiteListMap: "map<InputEventType,string[]>",
  },
}
