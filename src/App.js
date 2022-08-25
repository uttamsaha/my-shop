import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/AllProducts/AllProducts';
import PostDetails from './Pages/Blogs/PostDetails/PostDetails';
import Posts from './Pages/Blogs/Posts/Posts';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
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
        <Route path='/posts' element={<Posts></Posts>}></Route>
        <Route path='/posts/:postID' element={<PostDetails></PostDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
