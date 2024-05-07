import React, { useContext } from 'react';
import { MyContext } from '../MyContextProvider';
const ThirdCounter = () => {
    const {thirdcounter,setthirdcounter } = useContext(MyContext);

  const increment = () => {
    setthirdcounter(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setthirdcounter(prevCount => prevCount - 1);
  };
  return (
    <div>
    <h1>Counter</h1>
    <p>Counts: {thirdcounter}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
  )
}

export default ThirdCounter
