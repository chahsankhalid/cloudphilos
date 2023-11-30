import React from "react";
import Button from "react-bootstrap/Button";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <>
      <section id="solutions" className="mt-100">
        <div className="featured-heading text-center">
          <h1 className="nexa-bold">OUR FEATURED SOLUTIONS</h1>
          <p className="nexa-book">{t("feature-heading")}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="cardsimg">
                <div className="workimg-heading white">
                  <h2 className="nexa-bold">Strategy</h2>
                </div>
                <img
                  src={"./assets/images/Service1.png"}
                  alt="icons"
                  className="cardsimgpic"
                />
                <div className="overlay-cardsimg">
                  <h2 className="nexa-bold blue">Strategy</h2>
                  <div className="cards-para">
                    <p className="nexa-book">{t("strategy")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cardsimg">
                <div className="workimg-heading white">
                  <h2 className="nexa-bold">Build & Migrate</h2>
                </div>
                <img
                  src={"./assets/images/Service2.png"}
                  alt="icons"
                  className="cardsimgpic"
                />
                <div className="overlay-cardsimg">
                  <h2 className="nexa-bold blue">Build & Migrate</h2>
                  <div className="cards-para">
                    <p className="nexa-book">{t("buildmigrate")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cardsimg">
                <div className="workimg-heading white">
                  <h2 className="nexa-bold">Optimize & Right Size</h2>
                </div>
                <img
                  src={"./assets/images/Service3.png"}
                  alt="icons"
                  className="cardsimgpic"
                />
                <div className="overlay-cardsimg">
                  <h2 className="nexa-bold blue">Optimize & Right Size</h2>
                  <div className="cards-para">
                    <p className="nexa-book">{t("right-size")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cardsimg">
                <div className="workimg-heading white">
                  <h2 className="nexa-bold">
                    Well-Architected Framework Review
                  </h2>
                </div>
                <img
                  src={"./assets/images/Service4.png"}
                  alt="icons"
                  className="cardsimgpic"
                />
                <div className="overlay-cardsimg">
                  <h2 className="nexa-bold blue">
                    Well-Architected Framework Review
                  </h2>
                  <div className="cards-para">
                    <p className="nexa-book">{t("framework")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row cardsrow2">
            <div className="col-md-3">
              <div className="cardsimg">
                <div className="workimg-heading white">
                  <h2 className="nexa-bold">Security Assessment</h2>
                </div>
                <img
                  src={"./assets/images/Service5.png"}
                  alt="icons"
                  className="cardsimgpic"
                />
                <div className="overlay-cardsimg">
                  <h2 className="nexa-bold blue">Security Assessment</h2>
                  <div className="cards-para">
                    <p className="nexa-book">{t("security")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cardsimg">
                <div className="workimg-heading white">
                  <h2 className="nexa-bold">Microsoft Renewal Service</h2>
                </div>
                <img
                  src={"./assets/images/Service6.png"}
                  alt="icons"
                  className="cardsimgpic"
                />
                <div className="overlay-cardsimg">
                  <h2 className="nexa-bold blue">Microsoft Renewal Service</h2>
                  <div className="cards-para">
                    <p className="nexa-book">{t("microsoft")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cardsimg">
                <div className="workimg-heading white">
                  <h2 className="nexa-bold">Partner Enablement</h2>
                </div>
                <img
                  src={"./assets/images/Service7.png"}
                  alt="icons"
                  className="cardsimgpic"
                />
                <div className="overlay-cardsimg">
                  <h2 className="nexa-bold blue">Partner Enablement</h2>
                  <div className="cards-para">
                    <p className="nexa-book">{t("partner")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wantbtn">
            <Link className="" to="/contact-us">
              <Button variant="" className="white joureybtn growth-heading">
                I WANT TO KNOW MORE
              </Button>{" "}
            </Link>
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
    </>
  );
};

export default Services;
