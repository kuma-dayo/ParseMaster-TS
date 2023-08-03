import { ConfigDefault } from "../"

export const ConfigGuideInfoDialogAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideAction",
  Fields: {
    title: "string",
    content: "string",
    onOKActions: "ConfigGuideAction[]",
    onCancelActions: "ConfigGuideAction[]",
  },
}
