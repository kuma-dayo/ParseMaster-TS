import { EnumDefault } from "."

enum types {
  VINTAGE_MARKET_EVENT_TRIGGER_NONE = 0,
  VINTAGE_MARKET_EVENT_TRIGGER_ROUND = 1,
}

export const VintageMarketEventTriggerType: EnumDefault = {
  __signed: true,
  types: types,
}
