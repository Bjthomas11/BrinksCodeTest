import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiCameraHome, BiHome, BiShieldAlt } from "react-icons/bi";

import "./hero.scss";

const Hero = () => {
  const [toggleState, setToggleState] = useState("off");

  const toggle = () => {
    setToggleState(toggleState === "off" ? "on" : "off");
  };
  return (
    <div className="hero-container">
      <Container>
        <div className="hero-heading">
          <h2>
            Discover <br /> smart home <br />
            security
          </h2>
          <p>
            Complete home security and automation is at the core of what we do.
            Use the buttons below to explore the options we offer in protecting
            your home.
          </p>
        </div>
        <section className="smart-section">
          <div className={`logo ${toggleState}`}></div>
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
      </Container>
    </div>
  );
};

export default Hero;
