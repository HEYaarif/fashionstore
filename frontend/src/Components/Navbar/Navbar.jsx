import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Navbar/Navbar.module.css";
import logo from "../../assets/smlogo.png";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useCart } from "../Context/Cartcontext";

const Navbar = ({ setSearchTerm }) => {
  const { cart } = useCart();

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
          <input type="text" placeholder="Search products & brands" onChange={(e) => setSearchTerm(e.target.value)} />
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
            <NavLink to="/account" className={({ isActive }) => `${style.accountLink} ${isActive ? style.active : ""}`}>
              <FaUser />
              <span>Account</span>
            </NavLink>
          </li>
        </ul>
        <div className={style.cartIcon}>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? style.active : "")}>
            <div className="relative inline-flex">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length > 99 ? "99+" : cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;