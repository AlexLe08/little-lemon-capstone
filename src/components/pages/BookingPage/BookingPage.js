import BookingForm from "../../pages/BookingPage/BookingForm/BookingForm";

const BookingPage = (props) => {
  return (
    <>
      <h1>Booking Page</h1>
      <BookingForm {...props} />
    </>
  );
};

export default BookingPage;