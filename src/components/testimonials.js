import React from "react";

export const Testimonials = () => {
  return (
    <>
      <section id="Testimonial">
        <div className="container">
          <div className="circle">
            <h1 className="clientheading blue nexa-bold">OUR CLIENTS</h1>
            <div className="testdiv">
              <img
                className="card-img-left example-card-img-responsive"
                src={"./assets/images/pubic1.png"}
              />
              <div className="card flex-row">
                <div className="card-body">
                  <p className="card-text nexa-book">
                    “We partnered with CloudPhilos for cloud migration. The
                    transition was seamless, and their constant support made the
                    process smooth. Our operations have never been more
                    efficient!”
                  </p>
                  <h4 className="card-title h5 h4-sm nexa-bold">
                    CEO eCommerce Elevate
                  </h4>
                </div>
              </div>
            </div>
            <div className="testdiv2">
              <img
                className="card-img-left2 example-card-img-responsive"
                src={"./assets/images/public3.png"}
              />
              <div className="card2 flex-row">
                <div className="card-body">
                  <p className="card-text nexa-book">
                    “Working with CloudPhilos was a game-changer. Their insights
                    and guidance in optimizing our cloud infrastructure were
                    invaluable. The results exceeded our expectations. A
                    pleasure to work with.”
                  </p>
                  <h4 className="card-title h5 h4-sm nexa-bold">
                    CEO Green Tech Insights
                  </h4>
                </div>
              </div>
            </div>

            <div className="testdiv3">
              <div className="card3 flex-row">
                <div className="card-body">
                  <p className="card-text nexa-book">
                    “CloudPhilos transformed our operations. The cloud solutions
                    tailored to our needs propelled us into a new era of
                    efficiency and growth. Highly recommend their expertise.”
                  </p>
                  <h4 className="card-title h5 h4-sm nexa-bold">
                    CEO SkySprint
                  </h4>
                </div>
              </div>
              <img
                className="card-img-left3 example-card-img-responsive"
                src={"./assets/images/public2.png"}
              />
            </div>
            <div className="testdiv4">
              <div className="card4 flex-row">
                <div className="card-body">
                  <p className="card-text nexa-book">
                    “Exceptional service! The team at CloudPhilos displayed a
                    profound understanding of our industry. Their commitment to
                    data security and seamless integration truly impressed us.”
                  </p>
                  <h4 className="card-title h5 h4-sm nexa-bold">
                    Chairmen Data Guardian
                  </h4>
                </div>
              </div>
              <img
                className="card-img-left4 example-card-img-responsive"
                src={"./assets/images/public4.png"}
              />
            </div>
            <svg
              version="1.1"
              viewBox="0 0 500 500"
              preserveAspectRatio="xMinYMin meet"
            >
              <g
                fill="none"
                stroke="#002ACE"
                strokeWidth="0.5"
                strokeDasharray="4"
                opacity=".5"
              >
                <circle cx="250" cy="250" r="200" />
              </g>
            </svg>
            <div className="circle2">
              <svg
                version="1.1"
                viewBox="0 0 400 400"
                preserveAspectRatio="xMinYMin meet"
              >
                <g
                  fill="none"
                  stroke="#002ACE"
                  strokeWidth="0.5"
                  strokeDasharray="4"
                  opacity=".5"
                >
                  <circle cx="200" cy="200" r="150" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
