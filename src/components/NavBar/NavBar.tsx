import { useState, FC } from "react";
import Link from "next/link";
import { FaHome, FaHeart, FaCog } from "react-icons/fa";
import styles from './NavBar.module.scss';

const NavBar: FC = () => {
  const navItems = [
    { label: "Home", icon: <FaHome key="home" />, path: "/" },
    { label: "Favorites", icon: <FaHeart key="favorites" />, path: "/favorites" },
    { label: "Settings", icon: <FaCog key="settings" />, path: "/settings" },
  ];

  const [itemActive, setItemActive] = useState<number>(0);

  function handleItemClick(index: number) {
    setItemActive(index);
  }

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <Link href={item.path} key={index} legacyBehavior passHref>
            <li
              className={`${styles.navItem} ${itemActive === index ? styles.active : ""}`}
              onClick={() => handleItemClick(index)}
            >
              <a className={styles.navLink}>
                {item.icon}
                <p>{item.label}</p>
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
