import React,{useEffect} from "react";
import Navcomponent from "./navbar";
import { HashLink as Link } from "react-router-hash-link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Partners from "./partners";
import Ads from "./ads";
import Contact from "./contact";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom'

const About = () => {
  const { t, i18n } = useTranslation("global");
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  },[pathname])
  return (
    // <m.div
    //   initial={{ scaleY: 0 }}
    //   animate={{ scaleY: 1 }}
    //   exit={{ scaleY: 0 }}
    //   transition={{ duration: 1 }}
    // >
    <>
      <Navcomponent />
      <section id="aboutParent">
        <div className="container landingsection">
          <div className="row">
            <div className="col-md-7 vertical-center">
              <div className="main-content">
                <h1 className="blue cloud-heading">THE NEW WAY</h1>
                <h1 className="growth-heading">TO CLOUD</h1>
                <p className="nexa-book">{t("aboutus-content")}</p>
                <Link className="button1" to="/contact-us">
                  <Button variant="" className="white learnmorebtn">
                    CONTACT US
                  </Button>{" "}
                </Link>
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
                  src={"./assets/images/HeroIMGabout.png"}
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
      <section id="mission">
        <div className="container mt-100 ptb-50">
          <div className="row item-center">
            <div className="col-md-6">
              <div className="landing-content">
                <div className="landingcontent-parent">
                  <h2 className="mission-heading nexa-bold">OUR MISSION</h2>
                  <p className="mission-para nexa-book">{t("MISSION-PARA")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1 item-end">
              {/* <div className="reveal"> */}
              <img
                src={"./assets/images/missionimg.png"}
                className="missionimg"
                alt="missionimg"
              />
            </div>
          </div>
        </div>
        <div className="patternsolution">
          <img
            src={"./assets/images/Pattern2.svg"}
            className=""
            alt="pattern"
          />
        </div>
      </section>
      <section id="leaders">
        <div className="container mt-100 ptb-50">
          <div className="row item-center">
          <div className="col-md-5 offset-md-1 team-laptop">
              <div className="landing-content">
                <div className="landingcontent-parent team-content">
                  <h2 className="nexa-bold blue">MEET OUR LEADERS:</h2>
                  <h2 className="nexa-book">THE VISIONARIES</h2>
                  <h2 className="nexa-book">BEHIND CLOUDPHILOS</h2>
                  <p className="mission-para nexa-book">
                    {t("akram")}
                    <br />
                    <br />
                    {t("Robin")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={"./assets/images/ikram.png"}
                      className=""
                      alt="Ikram"
                    />
                    <Card.Body>
                      <Card.Title className="blue nexa-bold">
                        MUHAMMAD AKRAM
                      </Card.Title>
                      <Card.Text className="nexa-book">
                        Founder & CEO Of{" "}
                        <span className="blue nexa-bold">Cloud</span>Philos
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card className="card2">
                    <Card.Img
                      variant="top"
                      src={"./assets/images/robin.png"}
                      className=""
                      alt="Robin"
                    />
                    <Card.Body>
                      <Card.Title className="blue nexa-bold">
                        ROBIN VERSTRAELEN
                      </Card.Title>
                      <Card.Text className="nexa-book">
                        Co-Founder & CTO Of{" "}
                        <span className="blue nexa-bold">Cloud</span>Philos
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-1 team-desktop">
              <div className="landing-content">
                <div className="landingcontent-parent team-content">
                  <h2 className="nexa-bold blue">MEET OUR LEADERS:</h2>
                  <h2 className="nexa-book">THE VISIONARIES</h2>
                  <h2 className="nexa-book">BEHIND CLOUDPHILOS</h2>
                  <p className="mission-para nexa-book">
                    {t("akram")}
                    <br />
                    <br />
                    {t("Robin")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="values">
        <div className="patternsolution">
          <img
            src={"./assets/images/valuesPattern.png"}
            className="paternvalues"
            alt="pattern"
          />
        </div>
        <h2 className="nexa-bold text-center">OUR VALUES</h2>
        <div className="container ptb-50">
          <div className="row item-center ptb-50">
            <div className="col-md-4 content-center">
              <div className="ring">
                <div className="ring-content">
                  <p className="nexa-book">{t("ring1-heading1")}</p>
                  <p className="nexa-book">{t("ring1-heading2")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 content-center">
              <div className="ring">
                <div className="ring-content">
                  <p className="nexa-book">{t("ring2-heading1")}</p>
                  <p className="nexa-book">{t("ring2-heading2")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 content-center">
              <div className="ring">
                <div className="ring-content">
                  <p className="nexa-book">{t("ring3-heading1")}</p>
                  <p className="nexa-book">{t("ring3-heading2")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="patternsolution">
          <img
            src={"./assets/images/patternarrow.png"}
            className="paternarrow"
            alt="pattern"
          />
        </div>
      </section>
      <Partners />
      <Ads />
      <Contact />
    {/* </m.div> */}
    </>
  );
};

export default About;
