import React, { useEffect } from "react";
import Navcomponent from "./navbar";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Partners from "./partners";
import Ads from "./ads";
import Contact from "./contact";

const Career = () => {
  const { t, i18n } = useTranslation("global");
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navcomponent />
      <section id="aboutParent">
        <div className="container landingsection">
          <div className="row">
            <div className="col-md-7 vertical-center">
              <div className="main-content">
                <h1 className="growth-heading">HEY. DO YOU WANT TO</h1>
                <h1 className="blue cloud-heading">JOIN THE TEAM?</h1>
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
                  src={"./assets/images/career-Hero.png"}
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
      <section id="allCards">
        <div className="container mt-100">
          <div className="row">
            <div className="card-main">
              <h1 className="cloud-heading">
                WHAT <span className="blue">WE OFFER</span>
              </h1>
              <p className="nexa-book">
                An inspirational workplace occupied by like-minded colleagues
                whose vision will change the world.
              </p>
            </div>
            <div className="col-md-4">
              <Card className="career-card">
                <div className="card-num nexa-book">01</div>
                <Card.Body>
                  <Card.Title className="nexa-bold blue career-cardtitle">
                    Team over hierarchy
                  </Card.Title>
                  <Card.Text>
                    <p className="nexa-book career-cardpara">
                      We place our team members, their skills, and ideas above
                      hierarchical business structure.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="career-card">
                <div className="card-num nexa-book">02</div>
                <Card.Body>
                  <Card.Title className="nexa-bold blue career-cardtitle">
                    Flexibility at work
                  </Card.Title>
                  <Card.Text>
                    <p className="nexa-book career-cardpara">
                      Whether at home or the office to the hours you work,
                      CloudPhilos is a flexible employer.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="career-card">
                <div className="card-num nexa-book">03</div>
                <Card.Body>
                  <Card.Title className="nexa-bold blue career-cardtitle">
                    Competitive salary
                  </Card.Title>
                  <Card.Text>
                    <p className="nexa-book career-cardpara">
                      Feel valued and earn a competitive salary that’s in line
                      with the industry.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Partners />
      <Ads />
      <Contact />
    </>
  );
};

export default Career;
