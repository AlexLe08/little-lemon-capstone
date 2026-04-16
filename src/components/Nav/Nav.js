import "./nav.css";
import { Link } from "react-router-dom";

const NavSection = ({layout}) => {
  return (
    <nav>
      <ul className={`ul-${layout}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order-online">Order online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavSection;