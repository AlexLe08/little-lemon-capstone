import "./nav.css";
import { Link } from "react-router";

const NavSection = ({ layout }) => {
  return (
    <nav>
      <ul className={`ul-${layout}`}>
        <li>
          <Link to="/" tabIndex={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" tabIndex={0}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" tabIndex={0}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" tabIndex={0}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" tabIndex={0}>
            Order online
          </Link>
        </li>
        <li>
          <Link to="/login" tabIndex={0}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavSection;
