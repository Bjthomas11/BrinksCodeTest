import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiCameraHome, BiHome, BiShieldAlt } from "react-icons/bi";

import "./hero.scss";
import HeroOverlay from "./HeroOverlay";

const Hero = () => {
  const [toggleState, setToggleState] = useState("off");

  const toggle = () => {
    setToggleState(toggleState === "off" ? "on" : "off");
  };
  return (
    <div className="hero-container">
      <Container>
        <section className="smart-section d-lg-none">
          <div className="hero-content">
            <h2>
              Discover <br /> smart home <br />
              security
            </h2>
            <p>
              Complete home security and automation is at the core of what we
              do. Use the buttons below to explore the options we offer in
              protecting your home.
            </p>
          </div>
          <div className="logo-container">
            <div className={`logo ${toggleState}`}></div>
            <HeroOverlay />
          </div>

          <div className="toggle">
            <div className={`switch ${toggleState}`} onClick={toggle}>
              {toggleState === "off" ? (
                <span className="ex-off">Exterior</span>
              ) : (
                <span className="int-off">Interior</span>
              )}
            </div>
          </div>
          <div className="blocks">
            <Row>
              <Col xs={4}>
                <div className="block">
                  <BiShieldAlt color="#fff" size={30} />
                  <span>
                    Security <br /> Services
                  </span>
                </div>
              </Col>
              <Col xs={4}>
                <div className="block">
                  <BiCameraHome color="#fff" size={30} />
                  <span>Cameras</span>
                </div>
              </Col>
              <Col xs={4}>
                <div className="block">
                  <BiHome color="#fff" size={30} />
                  <span>
                    Home <br /> automation
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="smart-section d-none d-lg-block">
          <Row>
            <Col md={5}>
              <div className="hero-content">
                <h2>
                  Discover <br /> smart home <br />
                  security
                </h2>
                <p>
                  Complete home security and automation is at the core of what
                  we do. Use the buttons below to explore the options we offer
                  in protecting your home.
                </p>
                <div className="toggle">
                  <div className={`switch ${toggleState}`} onClick={toggle}>
                    {toggleState === "off" ? (
                      <span className="ex-off">Exterior</span>
                    ) : (
                      <span className="int-off">Interior</span>
                    )}
                  </div>
                </div>
                <div className="blocks">
                  <Row>
                    <Col xs={3}>
                      <div className="block">
                        <BiShieldAlt color="#fff" size={40} />
                        <span>
                          Security <br /> Services
                        </span>
                      </div>
                    </Col>
                    <Col xs={3}>
                      <div className="block">
                        <BiCameraHome color="#fff" size={40} />
                        <span>Cameras</span>
                      </div>
                    </Col>
                    <Col xs={3}>
                      <div className="block">
                        <BiHome color="#fff" size={40} />
                        <span>
                          Home <br /> automation
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={7} className="logo-container">
              <div className={`logo ${toggleState}`}></div>

              <HeroOverlay />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
