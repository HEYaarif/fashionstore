
import React from 'react';
import style from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.mainfooter}>
        <div className={style.about}>
          <h3>Registered Office Address</h3>
          <p>
            Fashion Internet Private Limited,<br /> Buildings Alyssa, Bengonia &
            Clove Embassy Tech Village,<br /> Devarabeesanahalli Village,
            Bengaluru, 560103,<br /> Karnataka, India <br />
            <strong>Telephone:</strong> 044-45614700 / 044-67415800
          </p>
        </div>
        <div className={style.aboutfooter}>
          <h2>About</h2>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className={style.helpfooter}>
          <h2>Help</h2>
          <ul>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Customer Care</a></li>
          </ul>
        </div>
        <div className={style.followfooter}>
          <h2>Follow Us</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
      <hr className={style.divider} />
      <div className={style.minifooter}>
        <p>Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
        <p>© 1996-2025, Fashion.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
