export function addInvestAmount(entryId, invester, amount) {
  return {
    type: 'ADD_INVEST_AMOUNT',
    entryId,
    invester,
    amount
  }
}

export function removeInvestAmount(entryId, i) {
  return {
    type: 'DEL_INVEST_AMOUNT',
    i,
    entryId
  }
}

export function updateCoinData(coinData) {
  return {
    type: 'UPDATE_COIN_DATA',
    data: coinData
  }
}
