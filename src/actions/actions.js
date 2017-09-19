export function addInvestAmount(entryId, invester, amount) {
  return {
    type: 'ADD_INVEST_AMOUNT',
    entryId,
    invester,
    amount
  }
}

export function removeInvestAmount(entryId, i) {
  type: 'DEL_INVEST_AMOUNT',
  i,
  entryId
}
