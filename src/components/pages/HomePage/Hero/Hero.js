import "./hero.css";
import restaurantImage from "../../../../images/restauranfood.jpg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ligula. Donec a nunc a enim efficitur convallis. Sed at nunc sed nisl convallis efficitur. Donec eget odio id enim efficitur convallis. Sed at nunc sed nisl convallis efficitur.</p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
        <img className="hero-img" src={restaurantImage} alt="Delicious Mediterranean Food" />
    </section>
  );
};

export default HeroSection;