// MyContextProvider.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [secondcount, setSecondCount] = useState(0);
    const [thirdcounter, setthirdcounter] = useState(0);
    const [showForm, setShowForm] = useState(false);

  return (
    <MyContext.Provider value={{ count, setCount,secondcount,setSecondCount, thirdcounter, setthirdcounter, showForm, setShowForm }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
