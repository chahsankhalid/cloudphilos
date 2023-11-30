import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    window.scrollTo(0, 0)
  },[pathname])
  return (
    <>
      <section id="contact" className="footer mt-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="footerlogo">
                <div className="footer-content">
                  <h1 className="nexa-bold">YOUR SEAMLESS</h1>
                  <h1 className="nexa-bold">CLOUD JOURNEY</h1>
                  <h1 className="nexa-bold">STARTS HERE</h1>
                  <Link className="" to="/contact-us" >
                    <Button
                      variant=""
                      className="white joureybtn growth-heading"
                    >
                      LETS START YOUR JOURNEY
                    </Button>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="gridview gridview1">
                <h4 className="nexa-book">QUICK LINKS</h4>
                <div className="footerlinks mar20">
                  <ul>
                    <li>
                      <Link className="nav-link" to="/">
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/about">
                        ABOUT
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/services">
                        OUR SERVICES
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/#solutions">
                        SOLUTIONS
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/contact-us">
                        CAREERS
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/contact-us">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="gridview gridview1">
                <h4 className="nexa-book">SOCIAL LINKS</h4>
                <div className="footerlinks mar20">
                  <ul className="rounded">
                    {/* <li>
                      <a
                        href=""
                        target="_blank"
                        className="socialicon facebook"
                      >
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        target="_blank"
                        className="socialicon instagram"
                      >
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank" className="socialicon twitter">
                        <span>Twitter</span>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/company/cloudphilos/"
                        target="_blank"
                        className="socialicon linkedin"
                      >
                        <span>LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer-logo">
              <Link className="footer-link" to="">
                <img
                  src={"./assets/images/footer-logo.png"}
                  className="footer-logoimg"
                />
              </Link>
            </div>
          </div>
          <div className="row lastrow">
            <div className="col-md-7 footer-rightcontent">
              <ul className="">
                <li>
                  <a href="" target="_blank" className="">
                    Terms & Conditions
                  </a>
                </li>
                {/* <li>
                  <a href="" target="_blank" className="">
                    Privacy & Policy
                  </a>
                </li> */}
                <li>
                  <span>{t("vat")}: NL004893073B28</span>
                </li>
                <li>
                  <span>{t("KVK")}: 91467993</span>
                </li>
              </ul>
            </div>
            <div className="col-md-5 content-end nexa-book">
              <p>
                @2023 <span className="brand">CloudPhilos</span> | All right
                reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
