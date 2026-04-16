import "./header.css";
import NavSection from "../Nav/Nav";
import logo from "../../icons/Logo.svg";


const HeaderSection = () => {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <NavSection layout="horizontal" />
    </header>
  );
};

export default HeaderSection;
