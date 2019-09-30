import React from "react";
import "./styles.scss";
import Logo from "./../../assets/graphics/logo.png";

const Header = props => {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img className="logoImg" data-test="logoImg" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
