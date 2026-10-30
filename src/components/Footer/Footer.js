import "./footer.css";
import logo from "../../icons/Logo.svg";
import NavSection from "../Nav/Nav";

const FooterSection = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <div className="footer-column">
        <h3>Doormat Navigation</h3>
        <NavSection layout="footer" />
      </div>
      <address className="footer-column">
        <h3>Contact Little Lemon</h3>
        <ul className="footer-ul">
          <li><a href="https://maps.google.com/?q=123+Main+Street,+Chicago,+IL+60601" target="_blank" rel="noopener noreferrer" tabIndex={0}>Address: 123 Main Street, Chicago, IL 60601</a></li>
          <li><a href="tel:+11234567890" tabIndex={0}>Phone: (123) 456-7890</a></li>
          <li><a href="mailto:info@littlelemon.com" tabIndex={0}>Email: info@littlelemon.com</a></li>
        </ul>
      </address>
      <div className="footer-column">
        <h3>Social Media Links</h3>
        <ul className="footer-ul">
          <li><a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer" tabIndex={0}>Facebook</a></li>
          <li><a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer"tabIndex={0}>Twitter</a></li>
          <li><a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer" tabIndex={0}>Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterSection;
