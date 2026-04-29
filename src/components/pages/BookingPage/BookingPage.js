import BookingForm from "../../pages/BookingPage/BookingForm/BookingForm";

const BookingPage = (props) => {
  return (
    <article className="booking-page">
      <div className="heading-container">
        <h1 tabIndex={-1}>Reservations</h1>
      </div>
      <BookingForm {...props} />
    </article>
  );
};

export default BookingPage;