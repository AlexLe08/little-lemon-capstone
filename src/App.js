import { BrowserRouter } from "react-router";
import "./App.css";
import FooterSection from "./components/Footer/Footer";
import HeaderSection from "./components/Header/Header";
import MainSection from "./components/Main/Main";

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </BrowserRouter>
    </>
  );
}

export default App;
