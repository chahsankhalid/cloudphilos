import React from "react";
import Button from "react-bootstrap/Button";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t, i18n } = useTranslation("global");
  // const state = {
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     450: {
  //       items: 2,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 2,
  //     },
  //   },
  // };
  return (
    <>
      <section id="Partners" className="mt-100">
        <div className="work-heading text-center">
          <h1 className="nexa-bold">
            MEET OUR <span className="blue">CORE PARTNERS</span>
          </h1>
          <p className="nexa-book">
           {t("carepartners")}
          </p>
        </div>
        <div className="container">
          {/* <OwlCarousel
            className="owl-theme"
            loop={true}
            margin={10}
            nav={false}
            dots={false}
            items={2}
            autoplay={false}
            autoPlayTimeout={1000}
            autoPlayHoverPause={true}
            responsive={state.responsive}
          >
           <div class="item">
              <img src={"./assets/images/AWS Logo.svg"} className="item1img" />
            </div>
            <div class="item">
              <img src={"./assets/images/Constantine Logo.svg"} className="item2img" />
            </div>
            
          </OwlCarousel> */}
          <div className="partner-icons">
            <a className="" href="https://aws.amazon.com" target="_blank">
              <div className="slider-img">
              <img
                  src={"./assets/images/AWS Logo.svg"}
                  className="partnersvg"
                  alt="ads"
                />
              </div>
            </a>
            <a className="" href="https://www.ingrammicro.com" target="_blank">
              <div className="slider-img slider-img2">
              <img
                  src={"./assets/images/instgram.svg"}
                  className="partnersvg"
                  alt="ads"
                />
              </div>
            </a>
          </div>
          <div className="text-center mt-70">
          <Link className="" to="/contact-us">
              <Button variant="" className="white worktogetherbtn">
                LET'S WORK TOGETHER
              </Button>{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
