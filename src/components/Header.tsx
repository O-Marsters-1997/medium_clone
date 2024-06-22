import React from "react";
import Button from "~/components/Button";
import { styles } from "./Header.css";
import Logo from "./Logo";
import Link from "~/components/Link";

type NavLink = {
  label: string;
  url: string;
};

const Header = () => {
  const navLinks: NavLink[] = [
    { label: "Our story", url: "" },
    { label: "Write", url: "" },
    { label: "Sign in", url: "/login" },
  ];

  return (
    <div className={styles.header}>
      <Logo theme="light" />
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {navLinks.map((link, index) => (
            <Link href={link.url} key={index} className={styles.navListItem}>
              {link.label}
            </Link>
          ))}
          <Button variant="primary">Get started</Button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
