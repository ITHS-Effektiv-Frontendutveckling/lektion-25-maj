import './App.css';
import { useDispatch } from 'react-redux';

import ViewCounter from './components/ViewCounter'; 
import increment from './actions/counterActions';

function App() {
  const dispatch = useDispatch();

  function handleClick() {
    console.log('Öka med 1');
    dispatch(increment(1));
  }

  return (
    <div className="App">
      <button onClick={ handleClick }>Öka med 1</button>

      <ViewCounter />
    </div>
  );
}

export default App;
