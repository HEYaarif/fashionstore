import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './Components/Context/Cartcontext.js';
import UserRoutes from "./Components/routes/UserRoutes";
import AdminRoutes from "./Components/routes/AdminRoutes";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <CartProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<UserRoutes searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </Router>
    </CartProvider>
  );
};

export default App;
