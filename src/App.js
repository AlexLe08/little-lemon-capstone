import "./App.css";
import FooterSection from "./components/Footer/Footer";
import HeaderSection from "./components/Header/Header";
import HomePage from "./components/pages/HomePage/HomePage";
import BookingPage from "./components/pages/BookingPage/BookingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
