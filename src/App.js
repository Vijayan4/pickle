import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contacts from './Contacts';
import Footer from './Footer';
import Order from './Order';
import Cart from './Cart';
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
