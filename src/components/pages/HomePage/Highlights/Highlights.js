import "./highlights.css";
import HighlightsCard from "./HighlightCard/HighlightCard";

const HighlightsSection = () => {
    return (
        <article className="highlights">
            <div className="highlights-header">
                 <h2>Specials!</h2>
                 <button className="menu-button">Online Menu</button>
            </div>
            <div className="highlights-cards">
                <HighlightsCard
                    image="https://source.unsplash.com/300x200/?greek-salad"
                    title="Greek Salad"
                    price="$12.99"
                    description="Fresh salad with tomatoes, cucumbers, olives, and feta cheese."
                />
                <HighlightsCard
                    image="https://source.unsplash.com/300x200/?bruschetta"
                    title="Bruschetta"
                    price="$8.99"
                    description="Grilled bread topped with garlic, tomatoes, basil, and olive oil."
                />
                <HighlightsCard
                    image="https://source.unsplash.com/300x200/?lemon-dessert"
                    title="Lemon Dessert"
                    price="$6.99"
                    description="Delicious lemon-flavored dessert to satisfy your sweet tooth."
                />
            </div>
        </article>
    );
}


export default HighlightsSection;