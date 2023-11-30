import React, { useEffect } from "react";
import Navcomponent from "./navbar";
import { HashLink as Link } from "react-router-hash-link";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Ads from "./ads";
import Contact from "./contact";

const OurServices = () => {
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
                <h1 className="growth-heading">GET ALL-IN-ONE</h1>
                <h1 className="blue cloud-heading">CLOUD SOLUTIONS</h1>
                <p className="nexa-book">{t("aboutus-content")}</p>
                <Link className="button1" to="/contact-us">
                  <Button variant="" className="white learnmorebtn">
                    EXPLORE SERVICES
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
                  src={"./assets/images/ourServiceHero.png"}
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
      <section id="allServices" className="mt-100">
        <h1 className="nexa-book">
          OUR <span className="nexa-bold blue">SERVICES</span>
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card service-card service-cardodd">
                <img
                  src={"./assets/images/servicecard1.png"}
                  className="historyimg1 landing-img"
                />
                <div className="card-body">
                <img
                  src={"./assets/images/Strategysvg.svg"}
                  className="iconimg"
                  alt="icon"
                />
                  <h5 className="card-title nexa-bold blue">STRATEGY</h5>
                  <p className="card-text nexa-book">{t("Strategy")}</p>
                  {/* <Link className="button1" to="/">
                    <Button variant="" className="white learnmorebtn">
                      LEARN MORE
                    </Button>{" "}
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-70">
              <div className="card service-card service-cardeven">
                <img
                  src={"./assets/images/swrvicecard-2.png"}
                  className="historyimg1 landing-img mobile-cardimg"
                />
                <div className="card-body">
                <img
                  src={"./assets/images/buildsvg.svg"}
                  className="iconimg"
                  alt="icon"
                />
                  <h5 className="card-title nexa-bold blue">BUILD & MIGRATE</h5>
                  <p className="card-text nexa-book">{t("Build&migrate")}</p>
                  {/* <Link className="button1" to="/">
                    <Button variant="" className="white learnmorebtn">
                      LEARN MORE
                    </Button>{" "}
                  </Link> */}
                </div>
                <img
                  src={"./assets/images/swrvicecard-2.png"}
                  className="historyimg1 landing-img desktopcard-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="paternarrow">
          <img
            src={"./assets/images/bluearrowpatern.png"}
            className=""
            alt="pattern"
          />
        </div>
      </section>
      <section id="allServices2" className="mt-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card service-card service-cardodd">
                <img
                  src={"./assets/images/optimze.png"}
                  className="historyimg1 landing-img"
                />
                <div className="card-body">
                <img
                  src={"./assets/images/optimizesvg.svg"}
                  className="iconimg"
                  alt="icon"
                />
                  <h5 className="card-title nexa-bold blue">
                    OPTIMIZE & RIGHT SIZE
                  </h5>
                  <p className="card-text nexa-book">{t("Optimize")}</p>
                  {/* <Link className="button1" to="/">
                    <Button variant="" className="white learnmorebtn">
                      LEARN MORE
                    </Button>{" "}
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-70">
              <div className="card service-card service-cardeven">
                <img
                  src={"./assets/images/architected.png"}
                  className="historyimg1 landing-img mobile-cardimg"
                />
                <div className="card-body">
                <img
                  src={"./assets/images/architectedsvg.svg"}
                  className="iconimg"
                  alt="icon"
                />
                  <h5 className="card-title nexa-bold blue">
                    WELL-ARCHITECTED FRAMEWORK REVIEW
                  </h5>
                  <p className="card-text nexa-book">{t("wellarchitected")}</p>
                  {/* <Link className="button1" to="/">
                    <Button variant="" className="white learnmorebtn">
                      LEARN MORE
                    </Button>{" "}
                  </Link> */}
                </div>
                <img
                  src={"./assets/images/architected.png"}
                  className="historyimg1 landing-img desktopcard-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="paterncloud">
          <img
            src={"./assets/images/Patternright.png"}
            className=""
            alt="pattern"
          />
        </div>
      </section>
      <section id="allServices3" className="mt-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card service-card service-cardodd">
                <img
                  src={"./assets/images/Security.png"}
                  className="historyimg1 landing-img"
                />
                <div className="card-body">
                <img
                  src={"./assets/images/securitysvg.svg"}
                  className="iconimg"
                  alt="icon"
                />
                  <h5 className="card-title nexa-bold blue">
                    SECURITY ASSESSMENT
                  </h5>
                  <p className="card-text nexa-book">{t("Securityassesment")}</p>
                  {/* <Link className="button1" to="/">
                    <Button variant="" className="white learnmorebtn">
                      LEARN MORE
                    </Button>{" "}
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-70">
              <div className="card service-card service-cardeven">
                <img
                  src={"./assets/images/microsoft.png"}
                  className="historyimg1 landing-img mobile-cardimg"
                />
                <div className="card-body">
                <img
                  src={"./assets/images/microsoftsvg.svg"}
                  className="iconimg"
                  alt="icon"
                />
                  <h5 className="card-title nexa-bold blue">
                    MICROSOFT RENEWAL SERVICE
                  </h5>
                  <p className="card-text nexa-book">
                  {t("Microsoft")}
                  </p>
                  {/* <Link className="button1" to="/">
                    <Button variant="" className="white learnmorebtn">
                      LEARN MORE
                    </Button>{" "}
                  </Link> */}
                </div>
                <img
                  src={"./assets/images/microsoft.png"}
                  className="historyimg1 landing-img desktopcard-img"
                />
              </div>
            </div>
            <div className="col-md-12 mt-70">
              <div className="card service-card service-cardodd">
                <img
                  src={"./assets/images/partner.png"}
                  className="historyimg1 landing-img"
                />
                <div className="card-body">
                <img
                  src={"./assets/images/partnersvg.svg"}
                  className="iconimg"
                  alt="icon"
                />
                  <h5 className="card-title nexa-bold blue">
                    PARTNER ENABLEMENT
                  </h5>
                  <p className="card-text nexa-book">
                  {t("Partner")}
                  </p>
                  {/* <Link className="button1" to="/">
                    <Button variant="" className="white learnmorebtn">
                      LEARN MORE
                    </Button>{" "}
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paternarrow">
          <img
            src={"./assets/images/bluearrowpatern.png"}
            className=""
            alt="pattern"
          />
        </div>
      </section>
      <Ads />
      <Contact />
    </>
  );
};

export default OurServices;
