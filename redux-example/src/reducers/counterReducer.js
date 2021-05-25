//Reducer - Uppdaterar state i store
const initialState = 0

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload
    default:
      return state
  }
}

export default counterReducer;