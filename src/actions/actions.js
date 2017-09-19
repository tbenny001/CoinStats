export function addInvestAmount(entryId, author, amount) {
  return {
    type: 'ADD_INVEST_AMOUNT',
    entryId,
    author,
    amount
  }
}

export function removeInvestAmount(entryId, i) {
  type: 'DEL_INVEST_AMOUNT',
  i,
  entryId
}
