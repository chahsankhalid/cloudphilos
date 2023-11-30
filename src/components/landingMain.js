import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <section id="boxContainerParent">
        <div className="container landingsection">
          <div className="row">
            <div className="col-md-7 vertical-center">
              <div className="main-content">
                <h1 className="blue cloud-heading">CLOUD-POWERED</h1>
                <h1 className="growth-heading">GROWTH ACCELERATION</h1>
                <p className="nexa-book">{t("landing-content")}</p>
                <Link className="button1" to="/contact-us">
                  <Button variant="" className="white learnmorebtn">
                    LEARN MORE
                  </Button>{" "}
                </Link>
                <Link className="solutionbtn" to="/#solutions">VISIT CLOUD SOLUTIONS</Link>
              </div>
            </div>
            <div className="col-md-5 item-end">
              {/* <div className="reveal"> */}
              {/* <img
                  src={"./assets/images/State=End.png"}
                  className="historyimg1 landing-img"
                /> */}
              <div className="grid">
                <div className="grids grid-item1">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="yes"
                    className="back-video"
                  >
                    <source
                      src={"./assets/videos/landing2.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="grids grid-item2">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="yes"
                    className="back-video"
                  >
                    <source
                      src={"./assets/videos/landing.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="grids grid-item3">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="yes"
                    className="back-video"
                  >
                    <source
                      src={"./assets/videos/landing3.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
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
    </>
  );
};
export default Landing;
