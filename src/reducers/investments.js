function postInvestments(state = [], action) {
  switch(action.type) {
    case 'ADD_INVEST_AMOUNT':
      return [...state,{
        user: action.invester,
        text: action.amount
      }];
    case 'DEL_INVEST_AMOUNT':
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function investments(state =[], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postInvestments(state[action.postId], action)
    }
  }
  return state;
}

export default investments;
