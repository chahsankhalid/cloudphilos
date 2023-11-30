import React, { useEffect, useState, useRef } from "react";
import Navcomponent from "./navbar";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";
import Contact from "./contact";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const { t, i18n } = useTranslation("global");
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const form = useRef();
  const [formState, setFormState] = useState({});
  const {} = useLoadScript({ googleMapsApiKey: "" });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o45h86e",
        "template_n5np20p",
        form.current,
        "K7SN-dGLQ7_6uz4Ng"
      )
      .then(
        (result) => {
          toast.success(
            "Thank you! We've received your message. Our team will contact you shortly.",
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        },
        (error) => {
          toast.error("Incorrect Email", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
  };

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  return (
    //   <m.div
    //   initial={{ scaleY: 0 }}
    //   animate={{ scaleY: 1 }}
    //   exit={{ scaleY: 0 }}
    //   transition={{ duration: 1 }}
    // >
    <>
      <Navcomponent />
      <section id="contactus">
        <div className="container landingsection">
          <div className="row">
            <div className="col-md-7 vertical-center">
              <div className="main-content">
                <h1 className="nexa-book">GET IN <span className="nexa-bold blue">TOUCH</span></h1>
                <p className="nexa-book">{t("aboutus-content")}</p>
              </div>
            </div>
            <div className="col-md-5 ">
              {/* <div className="reveal"> */}
              {/* <img
                    src={"./assets/images/State=End.png"}
                    className="historyimg1 landing-img"
                  /> */}
              <div className="heroimg1 item-end">
                <img
                  src={"./assets/images/contact-usHero.png"}
                  className="aboutheroimage"
                  alt="ads"
                />
              </div>
              <div className="mobanimation">
                <video autoPlay loop muted playsInline className="back-video2">
                  <source
                    src={"./assets/videos/landing.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="pattern">
          <img src={"./assets/images/Pattern.png"} className="" alt="pattern" />
        </div>
      </section>
      <section id="form-section">
        <div className="container">
          <div className="row mt-100">
            <div className="col-md-5">
              <h2 className="nexa-bold">
                <span className="blue">LEAVE</span>{" "}
                <span className="nexa-book">A MESSAGE</span>
              </h2>

              <form ref={form} onSubmit={sendEmail} className="emailform">
                {/* <form ref={form} className="emailform"> */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFname"
                    placeholder="Name *"
                    name="name"
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email Address *"
                        name="email"
                        onChange={changeHandler}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="phone"
                        className="form-control"
                        id="exampleInputPhone"
                        aria-describedby=""
                        placeholder="Phone Number *"
                        name="phone"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    // rows="12"
                    placeholder="Your Message"
                    name="message"
                    onChange={changeHandler}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submitemail">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-5 offset-md-2">
              <h2 className="nexa-bold visitus-heading">
                <span className="">OR</span>{" "}
                <span className="nexa-bold blue">VISIT US</span>
              </h2>
              <div className="map">
                <img
                  src={"./assets/images/map.png"}
                  className="mapimg"
                  about="map"
                />
              </div>
              <div className="contact-icon">
                <MdLocationOn />{" "}
                <span className="contact-text nexa-book">
                  Zuid Hollandlaan 7, 2596 AL Den Haag, Netherlands
                </span>
              </div>
              <div className="contact-icon">
                <MdEmail />{" "}
                <span className="contact-text nexa-book">
                  info@cloudphilos.io
                </span>
              </div>
              <div className="contact-icon contact-icon3">
                <MdLocalPhone />{" "}
                <span className="contact-text nexa-book">+31 85 002 18 79</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pattern">
          <img src={"./assets/images/Pattern.png"} className="" alt="pattern" />
        </div>
      </section>
      <ToastContainer />
      <Contact />
      {/* </m.div> */}
    </>
  );
};

export default ContactUs;
