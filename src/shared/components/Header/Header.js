import React, { Fragment, useState } from "react";

import ArtisecLogo from "../../../img/artisec_pod_zamkem.jpg";
import Backdrop from "../UI/Backdrop/Backdrop";

import "./Header.css";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <Fragment>
      <nav className={`mobile_main_nav ${!showMobileNav && "hide-mobile-nav"}`}>
        <ul className="mobile_main_nav__links">
          <li className="mobile_main_nav__link">O projektu</li>
          <li className="mobile_main_nav__link">Workshopy</li>
          <li className="mobile_main_nav__link">Výstupy</li>
          <li className="mobile_main_nav__link">Kontakty</li>
          {/* <li className="mobile_main_nav__link">Výstupy</li> */}
        </ul>
      </nav>
      {showMobileNav && <Backdrop clear={() => setShowMobileNav(false)} />}
      <header>
        {/* <div className="header_content--wrapper"> */}
          <img className="artisec_logo" src={ArtisecLogo} alt="Artisec Logo" />
          <div className="hamburger" onClick={() => setShowMobileNav(true)}>
            <div className="hamburger_strip"></div>
            <div className="hamburger_strip"></div>
            <div className="hamburger_strip"></div>
          </div>
          <nav className="main_nav">
            <ul className="main_nav__links">
              <a className="main_nav__link" href="https://www.artisec.cz/o-projektu">O projektu</a>
              <a className="main_nav__link" href="https://www.artisec.cz/workshop">Workshopy</a>
              <a className="main_nav__link">Výstupy</a>
              <a className="main_nav__link" href="https://www.artisec.cz/kontakty">Kontakty</a>
              {/* <li className="main_nav__link">Výstupy</li> */}
            </ul>
          </nav>
        {/* </div> */}
      </header>
    </Fragment>
  );
};

export default Header;
