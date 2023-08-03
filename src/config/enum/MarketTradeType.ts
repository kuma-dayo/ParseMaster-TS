import { EnumDefault } from "."

enum types {
  MARKET_TRADE_TYPE_DEAL = 0,
  MARKET_TRADE_TYPE_BARGAIN = 1,
}

export const MarketTradeType: EnumDefault = {
  __signed: true,
  types: types,
}
