import { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import Navlinks from "./Navlinks";

const MobileNavigation = () => {
  const [menu, setMenu] = useState(false);

  const hamburgerIcon = (
    <BiMenuAltRight
      className="hamburger"
      size="40px"
      onClick={() => setMenu(!menu)}
    />
  );

  const closeIcon = (
    <MdClose className="hamburger" size="40px" onClick={() => setMenu(!menu)} />
  );

  const closeMobileMenu = () => setMenu(false);

  return (
    <div className="mobileNavigation">
      {menu ? closeIcon : hamburgerIcon}
      {menu && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
};

export default MobileNavigation;
