import React from "react";
import Image from "next/image";
import Next from "~/assets/images/medium.svg";

const Header = () => {
  return (
    <div>
      <Image
        height={30}
        priority
        src={Next}
        alt="medium logo"
        className="logo"
      />
      <nav>
        <ul>
          <li className="nav-list-item">Our story</li>
          <li className="nav-list-item">Membership</li>
          <li className="nav-list-item">Write</li>
          <li className="nav-list-item">Sign in</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
