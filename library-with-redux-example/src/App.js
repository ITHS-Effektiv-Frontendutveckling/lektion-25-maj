import { Switch, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import BookInfo from './views/BookInfo';
import Books from './views/Books';

import { addBooks } from './actions/bookAction';

/**
 * App.js - Innehåller våra routes
 * Books.js - Renderar ut alla böcker - View
 * Book.js - Visar en bok
 * BookInfo.js - Visar mer information om en bok - View
 */

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getBooks() {
      const response = await fetch('/assets/childrensbooks.json');
      const data = await response.json();

      dispatch(addBooks(data));   
    }

    getBooks();
  }, [])

  return (
    <section className="library">
      <div className="wrapper">
        <Switch>
          <Route path="/" component={ Books } exact />
          <Route path="/book/" component={ BookInfo } />
        </Switch>
      </div>
    </section>
  );
}

export default App;
