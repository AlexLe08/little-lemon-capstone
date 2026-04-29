import "./highlightcards.css";

const HighlightCard = ({ image, title, price, description }) => {
    return (
        <article className="highlight-card">
            <img src={image} alt={title} />
            <div className="highlight-card-header">
               <h3>{title}</h3>
               <p className="price">{price}</p>
            </div>
            <div className="highlight-card-body">
                <p className="highlight-description">{description}</p>
                <p className="highlight-order">Order this item</p>
            </div>

        </article>
    );
}

export default HighlightCard;