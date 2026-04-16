import "./footer.css";
import logo from "../../icons/Logo.svg";
import NavSection from "../Nav/Nav";

const FooterSection = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <div className="footer-column">
        <h3>Doormat Navigation</h3>
        <NavSection layout="vertical" />
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <p>Address: 123 Main Street, Chicago, IL 60601</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@littlelemon.com</p>
      </div>
      <div className="footer-column">
        <h3>Social Media Links</h3>
        <ul>
          <li><a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterSection;
