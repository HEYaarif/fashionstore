import React from 'react';
import styles from './Dashboard.module.css';
import { FiBell, FiSettings } from "react-icons/fi";

const Dashboard = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h3>WELCOME!</h3>
        <div className={styles.icons}>
          <FiBell />
          <FiSettings />
          <img src="https://i.pravatar.cc/30" alt="user" className={styles.avatar} />
        </div>
      </header>

      <div className={styles.alert}>
        We regret to inform you that our server is currently experiencing technical issues.
      </div>

      <section className={styles.stats}>
        <div className={styles.card}><span>📦</span><div><h4>Total Orders</h4><p>13,647</p></div></div>
        <div className={styles.card}><span>🔔</span><div><h4>New Leads</h4><p>9,526</p></div></div>
        <div className={styles.card}><span>🔐</span><div><h4>Deals</h4><p>976</p></div></div>
        <div className={styles.card}><span>💰</span><div><h4>Booked Revenue</h4><p>$123.6K</p></div></div>
      </section>
    </main>
  );
};

export default Dashboard;
