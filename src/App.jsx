import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const Home = lazy(() => import("./components/Home"));
const TechEvents = lazy(() => import("./pages/TechEvents"));
const NonTechEvents = lazy(() => import("./pages/NonTechEvents"));

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<div className="text-red-600">Loading...</div>}>
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tech-events" element={<TechEvents />} />
                <Route path="/non-tech-events" element={<NonTechEvents />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
