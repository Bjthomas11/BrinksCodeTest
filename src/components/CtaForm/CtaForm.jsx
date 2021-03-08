import { Row, Col } from "react-bootstrap";
import Form from "../global/Form/Form";

import "./ctaForm.scss";

const CtaForm = () => {
  return (
    <section className="cta-form-container">
      <Row>
        <Col xs={12} md={7}>
          <div className="cta-img"></div>
        </Col>
        <Col xs={12} md={5}>
          <Form />
        </Col>
      </Row>
    </section>
  );
};

export default CtaForm;
