import { useState } from "react";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import "./Navbar.css";

const Navbar = () => {
  const changeBackground = () => {
    if (window.scrollY >= 70) setNavbar(true);
    else setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  const [navbar, setNavbar] = useState(false);
  return (
    <nav className={navbar ? "active" : ""}>
      <div className="logo">
        <h2>R.K. Paints</h2>
        <span>Interiors & Decor</span>
      </div>
      <Navigation />
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
