import "./main.css";
import { useReducer, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import BookingPage from "../pages/BookingPage/BookingPage";
import ConfirmBookingPage from "../pages/BookingPage/ConfirmBookingPage";
import { fetchAPI, submitAPI } from "../../fetchAPI";
import AboutSection from "../pages/AboutPage/About";

const updateTimes = (state, action) => {
  switch (action.type) {
    case "update_date":
      const date = new Date(action.payload);
      const times = fetchAPI(date);
      return times;
    default:
      return state;
  }
};

const initializeTimes = () => {
  const date = new Date();
  return fetchAPI(date);
};

function MainSection() {
  const [reservations, setReservations] = useState(() => {
    const savedReservations = localStorage.getItem("reservations");
    return savedReservations ? JSON.parse(savedReservations) : [];
  });

  const [submitOccurred, setSubmitOccurred] = useState(false);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const submitSuccess = submitAPI(formData);
    if (submitSuccess) {
      setReservations((prev) => {
        const updatedReservations = [...prev, formData];
        localStorage.setItem(
          "reservations",
          JSON.stringify(updatedReservations),
        );
        return updatedReservations;
      });
      setSubmitOccurred(true);
      navigate("/confirm-booking");
    } else {
      alert("Failed to submit the form. Please try again.");
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  useEffect(() => {
    let cleanup = false;
    function fetchInitialTimes() {
      const times = initializeTimes();
      if (!cleanup) {
        dispatch({ type: "update_date", payload: times });
      }
    }
    fetchInitialTimes();

    return () => {
      cleanup = true;
    };
  }, []);

  return (
    <main id="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              bookingPageProps={{
                availableTimes: availableTimes,
                dispatch: dispatch,
                submitForm: submitForm,
              }}
            />
          }
        />
        <Route path="/about" element={<AboutSection />} />
        <Route
          path="/menu"
          element={
            <div className="heading-container">
              <h1 tabIndex={-1}>Menu</h1>
            </div>
          }
        />
        <Route
          path="/order-online"
          element={
            <div className="heading-container">
              <h1 tabIndex={-1}>Order Online</h1>
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="heading-container">
              <h1 tabIndex={-1}>Login</h1>
            </div>
          }
        />
        <Route
          path="/confirm-booking"
          element={
            <ConfirmBookingPage
              submitOccurred={submitOccurred}
              reservations={{ reservations: reservations }}
            />
          }
        />
      </Routes>
    </main>
  );
}

export { MainSection as default, initializeTimes, updateTimes };
