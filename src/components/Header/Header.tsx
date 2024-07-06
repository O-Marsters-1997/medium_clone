import React from "react";
import Button from "~/components/Button";
import { styles } from "../Header.css";
import Logo from "../Logo";
import Link from "~/components/Link";
import { routes } from "~/utils/routes";
import { getUser } from "~/utils";
import Icon from "../Icon";

type NavLink = {
  label: string;
  url: string;
};

const Header = async () => {
  const user = await getUser();

  const navLinks: NavLink[] = [
    { label: "Our story", url: "" },
    { label: "Write", url: "" },
    { label: "Sign in", url: routes.login },
  ];

  const UnauthedHeader = (
    <div className={styles.header}>
      <Logo theme="light" />
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {navLinks.map((link, index) => (
            <Link href={link.url} key={index} className={styles.navListItem}>
              {link.label}
            </Link>
          ))}
          <Button variant="primary" href={routes.login}>
            Get started
          </Button>
        </ul>
      </nav>
    </div>
  );

  const AuthedHeader = (
    <div className={styles.header}>
      <div>
        <Logo theme="light" />
        <div className="search">
          <Icon />
          <span>Search</span>
        </div>
      </div>
      <nav className={styles.navigation}>
        <Icon />
        <span>Write</span>
        <Icon />
        <Icon className="profile" />
      </nav>
    </div>
  );

  return user === null ? UnauthedHeader : AuthedHeader;
};

export default Header;
