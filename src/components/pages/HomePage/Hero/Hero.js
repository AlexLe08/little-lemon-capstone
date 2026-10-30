import "./hero.css";
import restaurantImage from "../../../../images/restauranfood.jpg";
import { Link } from "react-router";
import { handleLinkRouteClick } from "../../../../utils";

const HeroSection = () => {

  return (
    <article className="hero">
      <div className="hero-content">
        <h1 tabIndex={-1}>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          suscipit auctor dui, sed efficitur ligula. Donec a nunc a enim
          efficitur convallis. Sed at nunc sed nisl convallis efficitur. Donec
          eget odio id enim efficitur convallis. Sed at nunc sed nisl convallis
          efficitur.
        </p>
        <Link to="/reservations" className="button-style" tabIndex={0} onClick={handleLinkRouteClick}>
          Reserve a Table
        </Link>
      </div>
      <img
        className="hero-img"
        src={restaurantImage}
        alt="Delicious Mediterranean Food"
      />
    </article>
  );
};

export default HeroSection;
