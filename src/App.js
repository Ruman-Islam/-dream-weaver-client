import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import AddProduct from './components/Dashboard/AddProduct';
import DeleteProduct from './components/Dashboard/DeleteProduct';
import { ToastContainer } from 'react-toastify';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div className='App page-container'>
      <div className="content-wrap">
        <HelmetProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/packages' element={<AllPackages />} />
            <Route path='/checkout/:packageId' element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            } />
            <Route path='/orders' element={
              <RequireAuth>
                <Orders />
              </RequireAuth>
            } />
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='add-product' element={<AddProduct />} />
              <Route path='delete-product' element={<DeleteProduct />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
