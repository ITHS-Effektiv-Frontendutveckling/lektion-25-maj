const initialState = {
  book: {}
}

export const bookReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_BOOK':
      return {
        ...state,
        book: action.payload
      }
    default:
      return state
  }
} 

//Reducer med object literal switch

// export const bookReducer = (state = initialState, action) => {
//   const index = {
//     'SET_BOOK': () => {
//       return {
//         ...state,
//         book: action.payload
//       }
//     },
//     'DEFAULT': () => {
//       return state
//     }
//   }

//   return (index[action.type] || index['DEFAULT'])();
// }