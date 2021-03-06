//Reducer - Uppdaterar state i store
const initialState = {
  counter: 0,
  cart: []
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - action.payload
      }
    default:
      return state
  }
}

export default counterReducer;