import "./testimonycard.css";

const TestimonyCard = ({ name, testimony }) => {
    return (
        <article className="testimony-card">
            <h3>Rating</h3>
            <div>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">☆</span>
            </div>
            <div className="testimony-row">
                <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} className="testimony-avatar" />
                <p>{testimony}</p>
            </div>
            <p>{name}</p>
        </article>
    );
}

export default TestimonyCard;