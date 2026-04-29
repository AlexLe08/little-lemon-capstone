import "./header.css";
import NavSection from "../Nav/Nav";
import logo from "../../icons/Logo.svg";
import { useEffect, useState } from "react";
import hamburgerIcon from "../../icons/🦆 icon _hamburger menu.svg";
import { Link } from "react-router";
import { handleLinkRouteClick } from "../../utils";


const HeaderSection = () => {

  const [ toggleState, setToggleState ] = useState(false);

  const handleClick = () => {
    setToggleState(!toggleState);
    var navMobile = document.getElementsByClassName("nav-mobile")[0];
    if (toggleState) {
      navMobile.style.display = "none";
    } else {
      navMobile.style.display = "block";
    }
  };

  useEffect(() => {
    var navMobile = document.getElementsByClassName("nav-mobile")[0];
    if (toggleState) {
      navMobile.style.display = "block";
    } else {
      navMobile.style.display = "none";
    }
  }, [toggleState]);

  return (
    <header className="header">
        <a href="#main-content" className="skip-link" tabIndex={0}>
          Skip to main content
        </a>
        <div className="logo-container">
          <Link to="/" tabIndex={0} alt="Go to homepage" onClick={() => {
            setToggleState(false);
            handleLinkRouteClick();
          }}>
            <img src={logo} alt="Little Lemon Logo" className="logo" />
          </Link>
          <button className="menu-toggle" aria-label="Toggle navigation menu" aria-expanded={toggleState} onClick={handleClick}>
            <img className="hamburger" src={hamburgerIcon} alt="Hamburger icon" />
          </button>
        </div>
      <div className="nav-mobile">
        <NavSection layout="vertical-mobile" setToggleState={setToggleState} />
      </div>
      <div className="nav-desktop">
        <NavSection layout="horizontal" setToggleState={setToggleState} />
      </div>

    </header>
  );
};

export default HeaderSection;
