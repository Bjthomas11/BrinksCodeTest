import { Container, Row, Col } from "react-bootstrap";
import GlobalButton from "../Button/Button";

import "./form.scss";

const Form = () => {
  const onSubmit = (e) => e.preventDefault();
  return (
    <div className="form-container">
      <div className="inner-form-wrapper">
        <h3>Start your home security journey with us today</h3>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Name" />

          <input type="email" placeholder="Email" />

          <Row>
            <Col xs={12} md={6}>
              <input type="number" placeholder="Phone" />
            </Col>
            <Col xs={12} md={6}>
              <input type="number" placeholder="Zip" />
            </Col>
          </Row>
          <small>
            By clicking on the "Get Your Free Quote" button, you consent to
            Brinks Home® contacting you at the number provided (including via
            SMS) using automatic technology. This consent is not required to
            purchase.
          </small>
          <GlobalButton type="submit">Get Your Free Quote</GlobalButton>
        </form>
      </div>
    </div>
  );
};

export default Form;
