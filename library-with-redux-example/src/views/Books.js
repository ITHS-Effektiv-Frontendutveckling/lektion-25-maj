import { useSelector } from 'react-redux';

import Book from '../components/Book';

function Books() {
  const books = useSelector((state) => { return state.books });

  return (
    <section className="books">
      { books.map((book) => {
        return <Book book={ book } key={ book.id } />
      })}
    </section>
  )
}

export default Books;