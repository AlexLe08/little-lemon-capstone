import TestimonyCard from "./TestimonyCard/TestimonyCard";
import "./testimonials.css";

const TestimonialsSection = () => {
    return (
        <article className="testimonials-section">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                <TestimonyCard
                    name="John Doe"
                    testimony="The food at Little Lemon is amazing! The flavors are so fresh and vibrant. I can't wait to come back!"
                />
                <TestimonyCard
                    name="Jane Smith"
                    testimony="I had a wonderful dining experience at Little Lemon. The staff was friendly and the atmosphere was cozy. Highly recommend!"
                />
                <TestimonyCard
                    name="Emily Johnson"
                    testimony="Little Lemon has become my go-to restaurant for healthy and delicious meals. The menu offers a great variety of options, and everything I've tried has been fantastic!"
                />
                <TestimonyCard
                    name="Michael Brown"
                    testimony="I had the pleasure of dining at Little Lemon last week, and it was an unforgettable experience. The food was exquisite, and the service was top-notch. I can't wait to return!"
                />
            </div>
        </article>
    );
}

export default TestimonialsSection;