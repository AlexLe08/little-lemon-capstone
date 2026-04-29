import "./header.css";
import NavSection from "../Nav/Nav";
import logo from "../../icons/Logo.svg";


const HeaderSection = () => {
  return (
    <header className="header">
        <a href="#main-content" className="skip-link" tabIndex={0}>
          Skip to main content
        </a>
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <NavSection layout="horizontal" />
    </header>
  );
};

export default HeaderSection;
