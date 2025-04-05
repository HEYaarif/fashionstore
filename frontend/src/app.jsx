import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx"
import Product from "./Components/Product/Product.jsx"
import Accessorie from "./Components/Accessorie/Accessorie.jsx";
import Login from "./Components/Login/Login.jsx"
import Footer from "./Components/Footer/Footer.jsx";
import Details from "./Components/Details/Details.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import AddtoCard from "./Components/Addtocard/AddtoCard.jsx";
import Cart from "./Components/Cart/Cart.jsx"
import NotFound from "./Components/NotFound/NotFound.jsx";
import Address from "./Components/Address/Address.js";
import Payment from "./Components/Payment/Payment.jsx";
import { CartProvider } from './Components/Context/Cartcontext.js';

const app = () => {
  const[searchTerm, setSearchTerm] = useState("")

  return (
    <div>
      <CartProvider>
      <Router>
        <Navbar setSearchTerm={setSearchTerm}/>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/product" element={<Product />} />
          <Route path="/accessorie" element={<Accessorie/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path = "/cart" element={<Cart/>}/>

          <Route path="/product/details/:id" element={<Details />} />
          <Route path="/details/:id" element={<Details/>}/>
          
          <Route path="/address" element={<Address/>}/>
          <Route path="/payment" element={<Payment/>}/>

          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
      </CartProvider>
    </div>
  );
};
export default app;