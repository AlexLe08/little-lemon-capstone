import TestimonyCard from "./TestimonyCard/TestimonyCard";
import "./testimonials.css";

const TestimonialsSection = () => {
    return (
        <article className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                <TestimonyCard
                    name="John Doe"
                    testimony="The food at Little Lemon is amazing! The flavors are so fresh and vibrant. I can't wait to come back!"
                    rating={5}
                />
                <TestimonyCard
                    name="Jane Smith"
                    testimony="I had a wonderful dining experience at Little Lemon. The staff was friendly and the atmosphere was cozy. Highly recommend!"
                    rating={4}
                />
                <TestimonyCard
                    name="Emily Johnson"
                    testimony="Little Lemon has become my go-to restaurant for healthy and delicious meals. The menu offers a great variety of options, and everything I've tried has been fantastic!"
                    rating={4}
                />
                <TestimonyCard
                    name="Michael Brown"
                    testimony="I had the pleasure of dining at Little Lemon last week, and it was an unforgettable experience."
                    rating={5}
                />
            </div>
        </article>
    );
}

export default TestimonialsSection;