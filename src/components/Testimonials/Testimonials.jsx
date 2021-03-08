import { Container, Row, Col } from "react-bootstrap";
import { IoStarSharp } from "react-icons/io5";
import TestimonialSlider from "./TestimonialSlider";

import "./testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonial-container">
      <Container>
        <Row>
          <Col xs={12}>
            <h3>See what our customers have to say</h3>
          </Col>
        </Row>
        <TestimonialSlider />
        <p className="rated">
          Rated 4.2 out of 5 based on 2,767 reviews on
          <IoStarSharp className="icon" size={30} />
        </p>
      </Container>
    </section>
  );
};

export default Testimonials;
