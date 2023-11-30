import React from "react";
import Button from "react-bootstrap/Button";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <section id="about">
        <div className="container mt-100">
          <div className="row item-center">
            <div className="col-md-6 desktopwheel">
              {/* <div className="reveal"> */}
              <div className="">
                <img
                  src={"./assets/images/Flywheel.png"}
                  className="flywheel"
                  alt="flywheel"
                />
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="landing-content">
                <div className="landingcontent-parent">
                  <h2 className="blue cloud-heading">ABOUT US</h2>
                  <p className="about-para nexa-book">
                  {t("about-wheel1")}
                    <br />
                    <br />
                    {t("about-wheel2")}
                  </p>
                </div>
                <Link className="" to="/contact-us">
                  <Button variant="" className="white learnmorebtn">
                    LEARN MORE
                  </Button>{" "}
                </Link>
              </div>
            </div>
            <div className="col-md-6 mobwheel">
              {/* <div className="reveal"> */}
              <div className="">
                <img
                  src={"./assets/images/Flywheel.png"}
                  className="flywheel"
                  alt="flywheel"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
