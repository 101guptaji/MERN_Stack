import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './Redux/Slices/productsSlice';
import Profile from './Components/Profile';
import SearchBar from './Components/SearchBar';

function App() {
  const products = useSelector(state=>state.products.products);

  const dispatch = useDispatch()

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then((data)=> dispatch(setProducts(data)));
  }, []);
  
  // console.log(products);

  return (
    <>
      <Router>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home products={products}/>} />
          <Route path="/product/:id" element={<Product products={products}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
