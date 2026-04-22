import "./main.css";
import { useReducer, useEffect } from "react";
import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import BookingPage from "../pages/BookingPage/BookingPage";
import { fetchAPI } from "../../fetchAPI";

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
  const times = fetchAPI(date);
  return times;
};

const MainSection = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  useEffect(() => {
    function fetchInitialTimes() {
      const times = initializeTimes();
      dispatch({ type: "update_date", payload: times });
    }
    fetchInitialTimes();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimesReducer={{
                availableTimes: availableTimes,
                dispatch: dispatch,
              }}
            />
          }
        />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/menu" element={<h1>Menu Page</h1>} />
        <Route path="/order-online" element={<h1>Order Online Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </main>
  );
};

export { MainSection as default, initializeTimes, updateTimes };
