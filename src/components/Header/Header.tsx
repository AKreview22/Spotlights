import React from 'react';
import styles from './Header.module.scss';



const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Shop Latest Technological Products</h1>
        <p>
          Unleash tomorrows technology today: elevating your world with 
          <span className={styles.highlight}> innovative solutions </span> 
          and unparalleled performance!
        </p>
        <button className={styles.exploreButton}>Explore all products</button>
      </div>
    </header>
  );
};

export default Header;
