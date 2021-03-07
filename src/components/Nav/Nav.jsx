import GlobalButton from "../global/Button/Button";
// import Row from "react-bootstrap/Row";
import { Container, Row, Col } from "react-bootstrap";

import "./nav.scss";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <nav className="nav-container" role="navigation">
      <Container>
        <Row className="inner-nav-container">
          <Col md={2}>
            <img
              src="https://us.brinks.com/o/brinks-website-theme/images/logos/brinks/brinks-logo-white.png"
              alt="brinks-logo"
            />
          </Col>
          <Col md={5}>
            <ul className="middle">
              <li>
                <a href="/">How It Works</a>
              </li>
              <li className={`more-links`}>
                <span role="button">
                  About Us <span className="chevron bottom"></span>
                </span>

                <ul>
                  <li>
                    <a href="!#">Our Story</a>
                  </li>

                  <li>
                    <a href="!#">Smart Center</a>
                  </li>
                </ul>
              </li>
              <li className="more-links">
                <span role="button">
                  Support <span className="chevron bottom"></span>
                </span>

                <ul>
                  <li>
                    <a href="!#">Moving?</a>
                  </li>
                  <li>
                    <a href="!#">Help Center</a>
                  </li>
                  <li>
                    <a href="!#">False Alarm Prevention</a>
                  </li>
                  <li>
                    <a href="!#">Products</a>
                  </li>
                  <li>
                    <a href="!#">Bill of Rights</a>
                  </li>
                  <li>
                    <a href="!#">Contact U</a>
                  </li>
                  <li>
                    <a href="!#">FAQs</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <ul className="right">
              <li>
                <GlobalButton buttonText="Shop Now" />
              </li>
              <li className="more-links">
                <span role="button">
                  Call Us <span className="chevron bottom"></span>
                </span>
                <ul className="contact">
                  <span>Support</span>
                  <li>
                    Call: <a href="tel:+8004479239">800.447.9239</a>
                  </li>
                  <li>
                    Text: <a href="tel:+4695138685">469.513.8685</a>
                  </li>
                  <span>Sales</span>
                  <li>
                    Call: <a href="tel:+8669569914">866.956.9914</a>
                  </li>
                  <li>
                    Text: <a href="tel:+4695514997">469.551.4997</a>
                  </li>
                </ul>
              </li>

              <li className="more-links">
                <span role="button">
                  My Account <span className="chevron bottom"></span>
                </span>

                <ul>
                  <li>
                    <a href="!#">Sign In</a>
                  </li>

                  <li>
                    <a href="!#">Register</a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <MobileNav />
    </nav>
  );
};

export default Nav;
