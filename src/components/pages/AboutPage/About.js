import "./about.css";

import restaurantImage from "../../../images/Mario and Adrian A.jpg";
import restaurantimage2 from "../../../images/Mario and Adrian b.jpg";

const AboutSection = () => {
  return (
    <article className="about-page">
    <div className="about">
      <div className="about-left-col">
        <h1>About Us</h1>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="about-right-col">
        <img
          src={restaurantImage}
          alt="Chefs Mario and Adrian preparing food in the kitchen"
          className="about-img"
        />
        <img 
          src={restaurantimage2}
          alt="Chefs Mario and Adrian preparing food in the kitchen"
          className="about-img"
        />
      </div>
      
    </div>
    <div className="history">
        <h2>Our History</h2>
        <p>
          The restaurant was founded in 1995 by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their dream of opening a restaurant. They named their restaurant after their favorite food, the lemon, which is a key ingredient in many of their dishes.
        </p>
      </div>
    </article>
  );
};

export default AboutSection;
