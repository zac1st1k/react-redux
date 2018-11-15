import React, { useContext } from 'react';
import { Context } from '../App';

const Child = () => {
  const { state, dispatch } = useContext(Context);

  return <div>
    <h1> Context received: {state}!</h1>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>dispatch</button>
  </div>
};

export default Child;
