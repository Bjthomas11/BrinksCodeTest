import { Container, Row, Col } from "react-bootstrap";

import BoxSlider from "./BoxSlider";

import "./ctaSlider.scss";

const CtaSlider = () => {
  return (
    <section className="cta-slider-container">
      <Container>
        <div className="content">
          <Row>
            <Col xs={12} md={6}>
              <h3>
                Complete customization,<span> down to your installation</span>{" "}
              </h3>
            </Col>
            <Col xs={12} md={6}>
              <p>
                Our systems are designed to be user friendly and to simplify
                security. Even if you’ve selected self-install, we’ll still help
                you get setup.
              </p>
            </Col>
          </Row>
        </div>
        <p className="works-text">Here’s how it works:</p>
        <BoxSlider />
      </Container>
    </section>
  );
};

export default CtaSlider;
