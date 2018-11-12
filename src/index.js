import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reducer from './reducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

render();

store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export { store };
