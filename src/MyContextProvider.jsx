// MyContextProvider.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [secondcount, setSecondCount] = useState(0);
    const [thirdcounter, setthirdcounter] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount,secondcount,setSecondCount, thirdcounter, setthirdcounter }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
