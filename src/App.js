import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import Signup from './components/Login/Signup';
import NotFound from './components/NotFound/NotFound';
import AllPackages from './components/Packages/AllPackages';
import Footer from './components/Shared/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='App page-container'>
      <div className="content-wrap">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/packages' element={<AllPackages />} />
          <Route path='/checkout/:packageId' element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
