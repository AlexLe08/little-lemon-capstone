import "./confirmbookingpage.css";

const ConfirmBookingPage = (props) => {
  const { reservations } = props.reservations;
  const submitOccurred = props.submitOccurred;
  const recentReservationIndex = reservations.length - 1;

  const reservationInfo = (index) => {
    return `${reservations[index].occasion === "None" ? "" : reservations[index].occasion + " on "}${reservations[index].date} at ${reservations[index].time} for ${reservations[index].guests} guests`;
  };

  return (
    <div className="booking-confirmation-page">
      <h1 tabIndex={-1}>
        {submitOccurred ? "Booking Confirmed!" : "Current Reservations"}
      </h1>
      <div className="confirmed-reservation-container">
        {submitOccurred ? (
          <>
            <p>
              Thank you for your reservation. We look forward to serving you at
              Little Lemon!
            </p>
            <div className="confirm-center-text">
              <h2>Reservation Made:</h2>
              <p>{reservationInfo(recentReservationIndex)}</p>
            </div>
          </>
        ) : null}
        <h2>Recent Reservations</h2>
        <ul>
          {reservations.map((name, index) => {
            return (
              <li key={name.ocassion + "-" + name.date + "-" + name.time + "-" + index}>
                <p>{reservationInfo(index)}</p>
              </li>
            );
          }).slice(-4)}
        </ul>
      </div>
    </div>
  );
};

export default ConfirmBookingPage;
