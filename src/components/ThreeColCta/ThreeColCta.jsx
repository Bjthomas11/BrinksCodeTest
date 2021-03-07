import { Container, Row, Col } from "react-bootstrap";
import CtaWithButton from "../global/CtaWithButton/CtaWithButton";

import "./threeColCta.scss";

const ThreeColCta = () => {
  return (
    <section className="three-col-cta-container">
      <Container>
        <Row className="top-content">
          <Col xs={12} md={5}>
            <h3>
              Explore our security <span>solutions</span>
            </h3>
          </Col>
          <Col xs={12} md={7}>
            <p className="blurb">
              We pride ourselves in offering customized comfort, security
              assurance, and purchase insurance.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-none d-lg-block">
            <small>
              All of our systems include a risk free 30-day trial—if it doesn’t
              fit your security standards, you can return it for a full refund.
              Our systems also include a 2-year product warranty, unmatched
              professional monitoring, and customer service.
            </small>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <CtaWithButton />
          </Col>
          <Col xs={12} md={4}>
            <CtaWithButton />
          </Col>
          <Col xs={12} md={4}>
            <CtaWithButton />
          </Col>
        </Row>
        <small className="finance-copy d-xs-block d-md-none">
          <a href="/">*0% APR financing available</a>
        </small>
      </Container>
    </section>
  );
};

export default ThreeColCta;
