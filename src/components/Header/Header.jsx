import "./Header.scss";

import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBot from "./HeaderBot/HeaderBot";

const Header = () => {
  return (
    <header className="header-wrapper">
      <HeaderTop />
      <HeaderBot />
    </header>
  );
};

export default Header;
