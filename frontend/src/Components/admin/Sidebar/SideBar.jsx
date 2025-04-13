import React from 'react';
import { NavLink } from 'react-router-dom';
import {MdDashboard, MdCategory, MdInventory, MdShoppingCart, MdLock, MdAttachMoney
} from "react-icons/md";
import { FiSettings, FiUser } from "react-icons/fi";
import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>🛒 FashionStore</h2>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/admin" end className={({ isActive }) => isActive ? styles.active : ''}>
            <MdDashboard /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/addproduct" className={({ isActive }) => isActive ? styles.active : ''}>
            <MdCategory /> Add Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/manageproduct" className={({ isActive }) => isActive ? styles.active : ''}>
            <MdInventory /> Manage Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders" className={({ isActive }) => isActive ? styles.active : ''}>
            <MdShoppingCart /> Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/deals" className={({ isActive }) => isActive ? styles.active : ''}>
            <MdLock /> Deals
          </NavLink>
        </li>
        <li>
          <NavLink to="/invoices" className={({ isActive }) => isActive ? styles.active : ''}>
            <MdAttachMoney /> Invoices
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? styles.active : ''}>
            <FiSettings /> Settings
          </NavLink>
        </li>
      </ul>

      <ul className={styles.userSection}>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : ''}>
            <FiUser /> Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/roles" className={({ isActive }) => isActive ? styles.active : ''}>
            Roles
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
