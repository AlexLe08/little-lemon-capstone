import "../BookingForm/Bookingform.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = (props) => {
  const { availableTimes, dispatch, submitForm } = props.bookingPageProps;

  const {
    values,
    errors,
    touched,
    getFieldProps,
    setFieldValue,
  } = useFormik({
    initialValues: {
      date: new Date().toISOString().split("T")[0],
      time: "",
      guests: 1,
      occasion: "None",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date Required"),
      time: Yup.string().required("Time Required"),
      guests: Yup.number().required().min(1, "Must be at least 1 guest"),
      occasion: Yup.string().optional(),
    }),
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitForm(values);
  };

  const handleDateChange = (event) => {
    setFieldValue("date", event.target.value);
    dispatch({ type: "update_date", payload: values.date });
  };

  const validateForm = () => {
    return values.date && values.time && values.guests;
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <h2>Book Now</h2>
          <label htmlFor="res-date">
          Choose date<span className="required">*</span>
        </label>
        <input
          type="date"
          id="res-date"
          required
          {...getFieldProps("date")}
          onChange={handleDateChange}
        />
        {errors.date && touched.date ? (
          <p className="error">{errors.date}</p>
        ) : null}
        <label htmlFor="res-time">
          Choose time<span className="required">*</span>
        </label>
        <select
          id="res-time"
          required
          {...getFieldProps("time")}
          disabled={availableTimes.length === 0}
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && touched.time ? (
          <p className="error">{errors.time}</p>
        ) : null}
        <label htmlFor="guests">
          Number of guests<span className="required">*</span>
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          required
          {...getFieldProps("guests")}
        />
        {errors.guests && touched.guests ? (
          <p className="error">{errors.guests}</p>
        ) : null}
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" {...getFieldProps("occasion")}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {errors.occasion && touched.occasion ? (
          <p className="error">{errors.occasion}</p>
        ) : null}
        <button
          type="submit"
          disabled={!validateForm()}
          aria-label={validateForm() ? "On Click Make Your Reservation" : "Fill in all required fields before clicking"}
        >
          {validateForm() ? "Make Your Reservation" : "Fill in all required fields"}
        </button>
        </div>
        
      </form>
      <p>
        Occasion {values.occasion} on {values.date} at {values.time} for{" "}
        {values.guests} guests
      </p>
    </>
  );
};

export default BookingForm;
