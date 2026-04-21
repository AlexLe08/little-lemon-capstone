import "./main.css";
import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import BookingPage from "../pages/BookingPage/BookingPage";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "update_date":
      console.log("Updating times for date:", action.payload);
      return initializeTimes();
    default:
      return state;
  }
};

const MainSection = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes,
  );

  return (
    <main>
      <Router>
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
      </Router>
    </main>
  );
};

export { MainSection as default, initializeTimes, updateTimes };
