import React,{useEffect} from "react";
import Landing from "./landingMain";
import Navcomponent from "./navbar";
import About from "./ourHost";
import Partners from "./partners";
import Services from "./services";
import Contact from "./contact";
import Ads from "./ads";
import { motion as m } from "framer-motion";
import { useLocation } from 'react-router-dom'

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  },[pathname])
  return (
    <>
      {/* // <m.div
    //   initial={{ scaleY: 0 }}
    //   animate={{ scaleY: 1 }}
    //   exit={{ scaleY: 0 }}
    //   transition={{ duration: 1 }}
    // > */}
      {/* <a id="back-to-top" href="#" className="back-to-top" role="button"><IoIosArrowUp className="upicon"/></a> */}

      <Navcomponent />
      <Landing />
      <About />
      <Services />
      {/* <Testimonials /> */}
      <Partners />
      <Ads />
      <Contact />
    </>
    // </m.div>
  );
};

export default Home;
