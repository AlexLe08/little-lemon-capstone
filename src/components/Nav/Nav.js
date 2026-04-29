import { handleLinkRouteClick } from "../../utils";
import "./nav.css";
import { Link } from "react-router";

const linkNames = [
  "Home",
  "About",
  "Menu",
  "Reservations",
  "Order online",
  "Login",
];

const NavSection = (props) => {
  const { layout, setToggleState } = props;

  const handleLinkClick = async () => {
    if (layout === "vertical-mobile") {
      setToggleState(false);
    }
    handleLinkRouteClick();
  };

  const NavLinks = linkNames.map((name, index) => {
    const path =
      name === "Home" ? "/" : `/${name.toLowerCase().replace(/\s/g, "-")}`;
    return (
      <li key={name}>
        <Link to={path} tabIndex={0} onClick={handleLinkClick}>
          {name}
        </Link>
        {index < linkNames.length - 1 && layout === "vertical-mobile" && (
          <div className="divider"></div>
        )}
      </li>
    );
  });

  return (
    <nav>
      <ul className={`ul-${layout} header-text`}>{NavLinks}</ul>
    </nav>
  );
};

export default NavSection;
