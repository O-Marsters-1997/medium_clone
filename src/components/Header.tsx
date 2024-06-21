import React from "react";
import Image from "next/image";
import Medium from "~/assets/images/medium.svg";
import Button from "~/components/Button";
import { styles } from "./Header.css";

const Header = () => {
  const navLinks = ["Our story", "Write", "Sign in"];

  return (
    <div className={styles.header}>
      <Image priority src={Medium} alt="medium logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {navLinks.map((link, index) => (
            <li key={index} className={styles.navListItem}>
              {link}
            </li>
          ))}
          <Button variant="primary">Get started</Button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
