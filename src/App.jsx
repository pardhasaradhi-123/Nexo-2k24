import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TechEvents from "./pages/TechEvents";
import NonTechEvents from "./pages/NonTechEvents";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-events" element={<TechEvents />} />
          <Route path="/non-tech-events" element={<NonTechEvents />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
