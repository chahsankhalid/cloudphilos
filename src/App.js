import "./index.css";
import "./mediaQueries.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import { AnimatePresence } from "framer-motion";
import jQuery from "jquery";
import About from "./components/about";
import ContactUs from "./components/contactUs";
import ourServices from './components/ourServices';
import Career from "./components/career";
import OurServices from "./components/ourServices";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const spinner = document.getElementById("pre-loader");

  if (spinner) {
    jQuery(document).ready(function () {
      setTimeout(() => {
        jQuery(spinner).slideUp(1000);
      }, 4000);
      setLoading(true);
    });
  }

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        {/* <Routes> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* </AnimatePresence> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default App;
