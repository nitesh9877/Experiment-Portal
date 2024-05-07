import React, { useContext } from 'react';
import { MyContext } from '../MyContextProvider';
const SecondCounter = () => {
    const {secondcount,setSecondCount } = useContext(MyContext);

  const increment = () => {
    setSecondCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setSecondCount(prevCount => prevCount - 1);
  };
  return (
    <div>
    <h1>Counter</h1>
    <p>Count: {secondcount}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
  )
}

export default SecondCounter
