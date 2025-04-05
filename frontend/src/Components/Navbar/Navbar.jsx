import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Navbar/Navbar.module.css";
import logo from "../../assets/smlogo.png";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = ({setSearchTerm}) => {
  return (
    <nav className={style.navContainer}>
      <div className={style.container}>

        <div className={style.logo}>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <div className={style.searchBox}>
          <FaSearch className={style.searchIcon} />
          <input type="text" placeholder="Search products & brands" onChange={(e)=> setSearchTerm(e.target.value)}/>

        </div>

        <ul className={style.navLinks}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? style.active : "")}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className={({ isActive }) => (isActive ? style.active : "")}>
              MEN
            </NavLink>
          </li>
          <li>
            <NavLink to="/accessorie" className={({ isActive }) => (isActive ? style.active : "")}>
              ACCESSORIES
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? style.active : "")}>
              <FaUser className={style.icon} /> Login
            </NavLink>
          </li>
        </ul>

       

        <div className={style.cartIcon}>
         <NavLink to="/cart" className={({ isActive }) => (isActive ? style.active : "")}>
           <FaShoppingCart />
         </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
