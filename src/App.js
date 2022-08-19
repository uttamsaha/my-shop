import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/AllProducts/AllProducts';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PlaceOrder from './Pages/Shared/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<AllProducts></AllProducts>}></Route>
        <Route path='/products/:productID' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
