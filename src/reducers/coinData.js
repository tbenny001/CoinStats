import currencies from '../const/currencies';

function coinData(state = {}, action) { //Mutating arguments(In this case action.data) is a no. This reducer needs to be refactored.
  switch(action.type) {
    case 'UPDATE_COIN_DATA':
      const normalizedObject = {};
      currencies.map(currency => { normalizedObject.currency = keySeeker(currency, action.data) })
      return Object.assign({}, state, {
        data: normalizedObject
      });
    default:
      return state;
  }
  return state;
}

function keySeeker(currency, arrayOfObjs) {
  for(i = 0; i < arrayOfObjs.length; i++) {
    if(arrayOfObjs[i].name == currency) {
      return arrayOfObjs[i];
    }
  }
}
