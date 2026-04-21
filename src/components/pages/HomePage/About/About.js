import "./about.css";

import restaurantImage from "../../../../images/Mario and Adrian A.jpg";

const AboutSection = () => {
  return (
    <article className="about">
      <div className="about-left-col">
        <h2>Little Lemon</h2>
        <h3>Restaurant</h3>
        <p className="big-top-padding">
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div>
        <img
          src={restaurantImage}
          alt="Little Lemon Restaurant"
          className="about-img"
        />
      </div>
    </article>
  );
};

export default AboutSection;
