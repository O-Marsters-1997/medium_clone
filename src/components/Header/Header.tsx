import React from "react";
import Button from "~/components/Button";
import { styles } from "./Header.css";
import Logo from "../Logo";
import Link from "~/components/Link";
import { routes } from "~/utils/routes";
import { getUser } from "~/utils";

import ThemeToggle from "~/components/ThemeToggle";
import Searchbar from "~/components/Searchbar";
import Avatar from "~/components/Avatar";
import Text from "~/components/Text";
import UserSettingsMenu from "~/screens/UserSettingsMenu";
import clsx from "clsx";

type NavLink = {
  label: string;
  url: string;
};

const Header = async () => {
  const user = await getUser();

  const navLinks: NavLink[] = [
    { label: "Our story", url: "" },
    { label: "Write", url: "" },
    { label: "Sign in", url: routes.signin },
  ];

  return (
    <>
      {user && (
        <div>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <Logo theme="light" />
              <Searchbar />
            </div>
            <nav className={styles.navigation}>
              <ThemeToggle />
              <Avatar user={user && user} />
            </nav>
          </div>
        </div>
      )}

      {!user && (
        <div className={styles.header}>
          <Logo theme="light" />
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              {navLinks.map((link, index) => (
                <Link
                  href={link.url}
                  key={index}
                  className={styles.navListItem}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" href={routes.signin}>
                Get started
              </Button>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
