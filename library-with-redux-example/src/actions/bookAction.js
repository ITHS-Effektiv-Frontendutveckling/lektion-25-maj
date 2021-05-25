export const setBook = (book) => {
  return {
    type: 'SET_BOOK',
    payload: book
  }
}

export const addBooks = (books) => {
  return {
    type: 'ADD_BOOKS',
    payload: books
  }
}