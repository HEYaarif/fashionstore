import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Product from "../Product/Product";
import Accessorie from "../Accessorie/Accessorie";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
import AddtoCard from "../Addtocard/AddtoCard";
import Details from "../Details/Details";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import NotFound from "../NotFound/NotFound";

const UserRoutes = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <Navbar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/accessorie" element={<Accessorie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/product/details/:id" element={<Details />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default UserRoutes;
