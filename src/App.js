import React, { useReducer } from 'react';
import './App.css';
import Counter from './Counter';
import reducer from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <header className="App-header">
        <Counter
          value={state}
          onIncrement={() => dispatch({ type: 'INCREMENT' })}
          onDecrement={() => dispatch({ type: 'DECREMENT' })}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </header>
    </div>
  );
}

export default App;
