import "./App.css";
import "./css/startpage.css";
import "./css/detailspage.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Startpage from "./pages/Startpage";
import Grader from "./pages/Grader";
import Excavator from "./pages/Excavator";
import Other from "./pages/Other";
import Truck from "./pages/Truck";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Startpage />} />
            <Route path="/vaghyvel" element={<Grader />} />
            <Route path="/gravmaskin" element={<Excavator />} />
            <Route path="/lastbil" element={<Truck />} />
            <Route path="/andra" element={<Other />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
