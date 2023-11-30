import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { HashLink as Link } from "react-router-hash-link";
import $ from "jquery";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navcomponent = () => {
  const { t, i18n } = useTranslation("global");
  // const [show, setShow] = useState(true);

  const handleChangeLanguage = (lang: string) => {
    // console.log(lang)
    i18n.changeLanguage(lang);
    hidenav();
    // setShow(!show);
  };

  const hidenav = () => {
    $("body").removeClass("active");
    document.body.style.overflow = "visible";
    $(".navbar-collapse").removeClass("show");
    $(".toggletwoicon,.iconone,.icontwo,.togglefouricon").removeClass("active");
    $(".navbar-toggler").removeClass("collapsed");
  };
  return (
    <>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" smooth={true} to="/">
              <img
                src={"./assets/images/Brand Logo.png"}
                className="logomain"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand to="/" className="moblogbrand">
              <Link className="nav-link" smooth={true} to="/">
                <img
                  src={"./assets/images/footer-logo.png"}
                  className="moblogo"
                  alt="logo"
                />
              </Link>
            </Navbar.Brand>
            <div className="middlenav">
              <Nav className="">
                <ul className="navul">
                  <li>
                    <NavLink
                      onClick={hidenav}
                      className="nav-link nav-underline"
                      smooth={true}
                      to="/about"
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={hidenav}
                      className="nav-link nav-underline"
                      smooth={true}
                      to="/services"
                    >
                      OUR SERVICES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={hidenav}
                      className="nav-link nav-underline"
                      smooth={true}
                      to="/#solutions"
                    >
                      SOLUTIONS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={hidenav}
                      className="nav-link nav-underline"
                      smooth={true}
                      to="/career"
                    >
                      CAREERS
                    </NavLink>
                  </li>
                </ul>
              </Nav>
            </div>
            <div className="endnav">
              <Link
                onClick={hidenav}
                className="nav-link white learnmorebtn btn"
                smooth={true}
                to="/contact-us"
              >
                CONTACT US
              </Link>
              {/* {show ? ( */}
                <button onClick={() => handleChangeLanguage("de")} className="debtn"><span class="fi fi-nl"></span></button>
              {/* )
              : ( */}
                <button onClick={() => handleChangeLanguage("en")} className="engbtn"><span class="fi fi-gb"></span></button>
              {/* )} */}
            </div>
            <div className="mobilenav-img">
              <img
                src={"./assets/images/Pattern2.svg"}
                className="moblogo2"
                alt="logo"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  );
};

export default Navcomponent;
