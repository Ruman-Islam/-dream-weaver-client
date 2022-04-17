import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home/Home';
import AllPackages from './components/Packages/AllPackages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/packages' element={<AllPackages />} />
        <Route path='/checkout/:packageId' element={<Checkout />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
