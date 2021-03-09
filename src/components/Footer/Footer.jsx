import { Container, Row, Col } from "react-bootstrap";
import Copyright from "./Copyright";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="justify-content-lg-between">
          <Col xs={6} md={3} className="col-lg-auto">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="!#">Sign In</a>
              </li>
              <li>
                <a href="!#">Support</a>
              </li>
              <li>
                <a href="!#">FAQs</a>
              </li>
              <li>
                <a href="!#">Refer a Friend</a>
              </li>
              <li>
                <a href="!#">Nest Activation</a>
              </li>
              <li>
                <a href="!#">Verify Representative</a>
              </li>
              <li>
                <a href="!#">Add-on Products</a>
              </li>
              <li>
                <a href="!#">Moving?</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="col-lg-auto">
            <h5>Resources</h5>
            <ul>
              <li>
                <a href="!#">How it Works</a>
              </li>
              <li>
                <a href="!#">Smart Center</a>
              </li>
              <li>
                <a href="!#">Crime Report</a>
              </li>
              <li>
                <a href="!#">Alarm Systems</a>
              </li>
              <li>
                <a href="!#">Sitemap</a>
              </li>
              <li>
                <a href="!#">Accessibility</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="col-lg-auto">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="!#">About Us</a>
              </li>
              <li>
                <a href="!#">Careers</a>
              </li>
              <li>
                <a href="!#">Team</a>
              </li>
              <li>
                <a href="!#">Investor Center</a>
              </li>
              <li>
                <a href="!#">Licensing</a>
              </li>
              <li>
                <a href="!#">Terms of Use</a>
              </li>
              <li>
                <a href="!#">Privacy Policy</a>
              </li>
              <li>
                <a href="!#">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="col-lg-auto">
            <h5>Partners</h5>
            <ul>
              <li>
                <a href="!#">Become a Partner</a>
              </li>
            </ul>
            <div className="d-block d-lg-none">
              <h5>Support</h5>
              <ul>
                <li>
                  Call: <a href="tel:8004479239">800.447.9237</a>
                </li>
                <li>
                  Text: <a href="tel:4695138685">469.513.8685</a>
                </li>
              </ul>
              <h5>Sales</h5>
              <ul>
                <li>
                  Call: <a href="tel:8662688720">800.268.8720</a>
                </li>
                <li>
                  Text: <a href="tel:4695514997">469.551.4997</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} className="d-lg-none social-mobile">
            <a href="!#">
              <FaInstagram color="#fff" size={25} />
            </a>

            <a href="!#">
              <FaFacebook color="#fff" size={25} />
            </a>

            <a href="!#">
              <AiOutlineYoutube color="#fff" size={25} />
            </a>

            <a href="!#">
              <FaTwitter color="#fff" size={25} />
            </a>
          </Col>
          <Col xs={6} md={3} className="d-none d-lg-block col-lg-auto">
            <h5>Support</h5>
            <ul>
              <li>
                Call: <a href="tel:8004479239">800.447.9237</a>
              </li>
              <li>
                Text: <a href="tel:4695138685">469.513.8685</a>
              </li>
            </ul>
            <h5>Sales</h5>
            <ul>
              <li>
                Call: <a href="tel:8662688720">800.268.8720</a>
              </li>
              <li>
                Text: <a href="tel:4695514997">469.551.4997</a>
              </li>
            </ul>
            <div className="social-desktop">
              <a href="!#">
                <FaInstagram color="#fff" size={25} />
              </a>

              <a href="!#">
                <FaFacebook color="#fff" size={25} />
              </a>

              <a href="!#">
                <AiOutlineYoutube color="#fff" size={25} />
              </a>

              <a href="!#">
                <FaTwitter color="#fff" size={25} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Copyright />
    </footer>
  );
};

export default Footer;
