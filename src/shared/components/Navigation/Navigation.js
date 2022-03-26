import React, { Fragment, useState } from "react";

import UhkLogo from "../../../img/fim-uhk-cs_hor.svg";
import Backdrop from "../UI/Backdrop/Backdrop";

import './Navigation.css'

const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <Fragment>
        <nav className={`mobile_main_nav ${!showMobileNav && 'hide-mobile-nav'}`}>
          <ul className="mobile_main_nav__links">
            <li className="mobile_main_nav__link">O projektu</li>
            <li className="mobile_main_nav__link">Workshopy</li>
            <li className="mobile_main_nav__link">Výstupy</li>
          </ul>
        </nav>
      {showMobileNav && <Backdrop clear={() => setShowMobileNav(false)}/>}
      <header>
        <img className="fim_uhk_logo" src={UhkLogo} alt="FIM UHK" />
        <div className="hamburger" onClick={() => setShowMobileNav(true)}>
          <div className="hamburger_strip"></div>
          <div className="hamburger_strip"></div>
          <div className="hamburger_strip"></div>
        </div>
        <nav className="main_nav">
          <ul className="main_nav__links">
            <li className="main_nav__link">O projektu</li>
            <li className="main_nav__link">Workshopy</li>
            <li className="main_nav__link">Výstupy</li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navigation;
