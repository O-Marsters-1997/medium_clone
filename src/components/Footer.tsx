import React from "react";
import { styles } from "~/components/Footer.css";
import Logo from "~/components/Logo";

const FooterBlack = () => {
  const navLinksMobile = ["About", "Help", "Terms", "Privacy"];
  const navLinksDesktop = [
    "Help",
    "Status",
    "About",
    "Careers",
    "Press",
    "Blog",
    "Privacy",
    "Terms",
    "Teams",
  ];

  return (
    <>
      <div className={styles.footerMobile}>
        <nav className={styles.footerNav}>
          <Logo theme="dark" />
          <ul className={styles.footerNavList}>
            {navLinksMobile.map((link, index) => (
              <li key={index} className={styles.footerNavListItem}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.footerDesktop}>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            {navLinksDesktop.map((link, index) => (
              <li key={index} className={styles.footerNavListItem}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default FooterBlack;
