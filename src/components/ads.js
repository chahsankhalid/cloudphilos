import React from "react";
import Button from "react-bootstrap/Button";
import { HashLink as Link } from "react-router-hash-link";

const Ads = () => {
  //   useEffect(() => {
  //     let revealContainers = document.querySelectorAll(".reveal");
  //     revealContainers.forEach((container) => {
  //       let image = container.querySelector("img");
  //       let tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: container,
  //           toggleActions: "restart none restart reset",
  //         },
  //       });
  //       tl.set(container, { autoAlpha: 1 });
  //       tl.from(container, 1.5, {
  //         xPercent: -100,
  //         ease: Power2.out,
  //       });
  //       tl.from(image, 1.5, {
  //         xPercent: 100,
  //         scale: 1.3,
  //         delay: -1.5,
  //         ease: Power2.out,
  //       });
  //     });
  //   }, []);
  return (
    <>
      <section id="">
        <div className="container mtb-100">
          <div className="row mt-100 bgblue border-r">
            <div className="col-md-8 vertical-center">
              <div className="ads-content">
                <h1 className="white cloud-heading">
                  LET'S START YOUR SEAMLESS
                </h1>
                <h1 className="white">CLOUD JOURNEY TODAY!</h1>
                <p className="nexa-book white">
                Use the latest technology in your organization. Deploy the cloud efficiently, generate new revenue streams and reduce costs, risk and CO2. 
                  <br /><br /> Have a project in mind or want to discuss your current
                  challenges?
                </p>
                <Link className="button1" to="/contact-us">
                  <Button variant="" className="white joureybtn growth-heading">
                    LET'S TALK
                  </Button>{" "}
                </Link>
              </div>
            </div>
            <div className="col-md-4 item-end norightpadding">
              <img
                src={"./assets/images/adsimg.png"}
                className="adsimage"
                alt="ads"
              />
              {/* <div class="grid">
                <div class="grids grid-item1">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="back-video"
                  >
                    <source
                      src={"./assets/videos/landing2.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div class="grids grid-item2">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="back-video "
                  >
                    <source
                      src={"./assets/videos/landing.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div class="grids grid-item3">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="back-video"
                  >
                    <source
                      src={"./assets/videos/landing3.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Ads;
