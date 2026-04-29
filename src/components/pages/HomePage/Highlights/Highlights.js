import "./highlights.css";
import HighlightsCard from "./HighlightCard/HighlightCard";
import { Link } from "react-router";
import LemonDessertImage from "../../../../images/lemon dessert.jpg";
import BruchettaImage from "../../../../images/bruchetta.svg";
import GreekSaladImage from "../../../../images/greek salad.jpg";
import { handleLinkRouteClick } from "../../../../utils";

const HighlightsSection = () => {
  return (
    <article className="highlights">
      <div className="highlights-header">
        <h2>Specials!</h2>
        <Link className="menu-button" to="/menu" tabIndex={0} onClick={handleLinkRouteClick}>
          Online Menu
        </Link>
      </div>
      <div className="highlights-cards">
        <HighlightsCard
          image={GreekSaladImage}
          title="Greek Salad"
          price="$12.99"
          description="Fresh salad with tomatoes, cucumbers, olives, and feta cheese."
        />
        <HighlightsCard
          image={BruchettaImage}
          title="Bruschetta"
          price="$8.99"
          description="Grilled bread topped with garlic, tomatoes, basil, and olive oil."
        />
        <HighlightsCard
          image={LemonDessertImage}
          title="Lemon Cake"
          price="$6.99"
          description="Delicious lemon-flavored dessert to satisfy your sweet tooth."
        />
      </div>
    </article>
  );
};

export default HighlightsSection;
