function coinData(state =[], action) {
  switch(action.type) {
    case 'UPDATE_COIN_DATA':
      return {
        coinData: action.data
      }
    default:
      return state;
  }
  return state;
}
