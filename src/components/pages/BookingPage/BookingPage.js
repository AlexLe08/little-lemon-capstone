import BookingForm from "../../pages/BookingPage/BookingForm/BookingForm";

const BookingPage = (props) => {
  return (
    <>
      <h1 tabIndex={-1}>Reservations</h1>
      <BookingForm {...props} />
    </>
  );
};

export default BookingPage;