import React, { useReducer } from 'react';
import './App.css';
import Counter from './components/Counter';
import Parent from './components/Parent';
import reducer from './reducers/reducer';

const Context = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <header className="App-header">
          <Counter
            value={state}
            onIncrement={() => dispatch({ type: 'INCREMENT' })}
            onDecrement={() => dispatch({ type: 'DECREMENT' })}
          />

          <Parent />

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
    </Context.Provider>
  );
}

export default App;
export { Context };
