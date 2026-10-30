import "./testimonycard.css";

const TestimonyCard = (props) => {
    const { name, testimony, rating } = props;
    return (
        <article className="testimony-card">
            <h3 aria-label={`${name}'s rating`}>{name}</h3>
            <div aria-label={`Rating: ${rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                    <span key={name + i} className="star">
                        {i < rating ? '★' : '☆'}
                    </span>
                ))}
            </div>
            <div className="testimony-row">
                <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} className="testimony-avatar" />
                <p>{testimony}</p>
            </div>
        </article>
    );
}

export default TestimonyCard;