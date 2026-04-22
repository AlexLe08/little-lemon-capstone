import { useState } from "react";
import "../BookingForm/Bookingform.css";

const BookingForm = (props) => {
  const availableTimes = props.bookingPageProps.availableTimes;
  const dispatch = props.bookingPageProps.dispatch;
  const submitForm = props.bookingPageProps.submitForm;

  const [fields, setFields] = useState({
    date: new Date().toISOString().split("T")[0],
    time: "",
    guests: 1,
    occasion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(fields);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setFields((prevState) => ({ ...prevState, date: selectedDate }));
    dispatch({ type: "update_date", payload: selectedDate });
  };

  return (
    <>
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          required
          value={fields.date}
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          required
          onChange={(e) =>
            setFields((prevState) => ({ ...prevState, time: e.target.value }))
          }
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          required
          onChange={(e) =>
            setFields((prevState) => ({
              ...prevState,
              guests: parseInt(e.target.value),
            }))
          }
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={(e) =>
            setFields((prevState) => ({
              ...prevState,
              occasion: e.target.value,
            }))
          }
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
      <p>
        Occasion {fields.occasion} on {fields.date} at {fields.time} for{" "}
        {fields.guests} guests
      </p>
    </>
  );
};

export default BookingForm;
