
import './App.css';
import TopBar from './components/TopBar';
import Counter from './components/Counter';
import { MyContextProvider } from './MyContextProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SecondCounter from './components/SecondCounter';
import ThirdCounter from './components/ThirdCounter';
import FourthCounter from './components/FourthCounter';
import Crudoperation from './pages/Crudoperation';

function App() {
  return (
    <>
    <MyContextProvider>
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/secondcounter" element={<SecondCounter />} />
        <Route path="/thirdcounter" element={<ThirdCounter />} />
        <Route path="/fourthcounter" element={<FourthCounter />} />
        <Route path="/crudoperation" element={<Crudoperation />} />

      </Routes>
    </Router>
  </MyContextProvider>
    
    </>
    
  );
}

export default App;
