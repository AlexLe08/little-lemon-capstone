import "./highlightcards.css";

const HighlightCard = ({ image, title, price, description }) => {
    return (
        <article className="highlight-card">
            <img src={image} alt={title} className="highlight-image" />
            <div className="highlight-card-header">
               <h3>{title}</h3>
               <p className="price">{price}</p>
            </div>
            <p className="highlight-description">{description}</p>
            <p className="highlight-order">Order this item</p>
        </article>
    );
}

export default HighlightCard;