import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";

import "./contentWithFeaturedImage.scss";

const ContentWithFeaturedImage = () => {
  return (
    <section className="featured-image-container">
      <Container className="desktop d-none d-md-block">
        <Row>
          <Col xs={12} md={6} className="img-container">
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/1Yxwjz4jc741GIxpsSZCFr/337fe1add7177431795500ef54ae09e2/Newsweek_BISCS2020_Siegel_Standard.png?fm=png&fl=png8"
              alt="best_in_state pic"
            />
            <p>
              Brinks Home <br /> best-in-state <br /> customer service
              <small>Newsweek, 2020</small>
            </p>
          </Col>
          <Col xs={12} md={6} className="content-container">
            <div className="content-wrapper">
              <h3 className="title">
                <span className="check">
                  <AiOutlineCheck size={50} />
                </span>
                Protecting over 1 million people
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="d-xs-block d-md-none">
        <div className="mobile">
          <Row>
            <Col xs={12} className="content-container">
              <div className="content-wrapper">
                <h3 className="title">
                  <span className="check">
                    <AiOutlineCheck size={50} />
                  </span>
                  Protecting over 1 million people
                </h3>
              </div>
            </Col>
            <Col xs={12} className="img-container">
              <img
                src="https://images.ctfassets.net/n58cc9djl3c5/1Yxwjz4jc741GIxpsSZCFr/337fe1add7177431795500ef54ae09e2/Newsweek_BISCS2020_Siegel_Standard.png?fm=png&fl=png8"
                alt="best_in_state pic"
              />
              <p>
                Brinks Home <br /> best-in-state <br /> customer service
                <small>Newsweek, 2020</small>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContentWithFeaturedImage;
