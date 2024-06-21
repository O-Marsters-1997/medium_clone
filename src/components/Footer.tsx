import React from "react";
import { styles } from "~/components/Footer.css";
import Logo from "~/components/Logo";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <nav>
        <Logo theme="dark" />
        <ul className={styles.footerNavList}>
          <li className="footer-list-item">About</li>
          <li className="footer-list-item">Help</li>
          <li className="footer-list-item">Terms</li>
          <li className="footer-list-item">Privacy</li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
