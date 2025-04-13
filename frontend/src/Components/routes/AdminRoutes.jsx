import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from "../admin/Dashboard/Dashboard";
import AddProduct from "../admin/AddProduct/AddProduct";
import ManageProducts from "../admin/ManageProducts/ManageProducts";
import SideBar from "../admin/Sidebar/SideBar";
import Orders from '../admin/Orders/Orders';

const AdminRoutes = () => {
  return (
    <>
    <SideBar />
     <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="/addproduct" element={<AddProduct />} />
       <Route path="/manageproduct" element={<ManageProducts/>} />
       <Route path='/orders' element={<Orders/>}/>
     </Routes>
  
    </>
  );
};

export default AdminRoutes;
