import { EnumDefault } from "."

enum types {
  VINTAGE_MARKET_EVENT_NONE = 0,
  VINTAGE_MARKET_EVENT_ENV = 1,
  VINTAGE_MARKET_EVENT_NPC = 2,
}

export const VintageMarketEventType: EnumDefault = {
  __signed: true,
  types: types,
}
