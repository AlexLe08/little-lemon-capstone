import NavSection from "./Nav";

const FooterSection = () => {
  return (
    <footer className="footer">
      <img src="/assets/logo.png" alt="Little Lemon Logo" className="logo" />
      <h2>Doormat Navigation</h2>
      <NavSection />
      <h2>Contact</h2>
      <div>
        <p>Address: 123 Main Street, Chicago, IL 60601</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@littlelemon.com</p>
      </div>
      <h2>Social Media Links</h2>
      <div>
        <a
          href="https://www.facebook.com/littlelemon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <br />
        <a
          href="https://www.twitter.com/littlelemon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <br />
        <a
          href="https://www.instagram.com/littlelemon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <p>Copyright © 2024 Little Lemon</p>
    </footer>
  );
};

export default FooterSection;
