import { ConfigDefault } from "../"

export const ConfigGadgetConsole: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    inTriggerAbilityName: "string",
    outTriggerAbilityName: "string",
    reminderTextMap: "string",
    reminderVanishDelay: "float",
    cameraAttachPoint: "string",
    finishGadgetState: "vuint",
    operations: "ConfigGadgetConsoleOperation[]",
    limitations: "ConfigGadgetConsoleLimitation[]",
    finishPosition: "ConfigGadgetConsolePosition[]",
  },
}
