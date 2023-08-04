import { ConfigDefault } from ".."

export const ConfigBulletPattern: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGadgetPattern",
  Fields: {
    triggerActions: "ConfigBaseGadgetTriggerAction[]",
    triggerLifeOverActions: "ConfigBaseGadgetTriggerAction[]",
    killByOther: "bool",
    dieDelayTime: "float",
    fireAISoundEvent: "bool",
    maxAutoKillDist: "float",
    enableCollisionDelay: "float",
    reset_last_pos_on_delay_end: "bool",
    re_trigger_on_delay_end: "bool",
  },
}
