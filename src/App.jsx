import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TechEvents from "./pages/TechEvents";
import NonTechEvents from "./pages/NonTechEvents";
import TechEventDeatails from "./pages/TechEventDeatails";
import NonTechEventDetails from "./pages/NonTechEventDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-events" element={<TechEvents />} />
          <Route path="/non-tech-events" element={<NonTechEvents />} />
          <Route path="/tech-events/:name" element={<TechEventDeatails />} />
          <Route
            path="/non-tech-events/:name"
            element={<NonTechEventDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
