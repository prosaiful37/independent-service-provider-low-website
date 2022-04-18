import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
