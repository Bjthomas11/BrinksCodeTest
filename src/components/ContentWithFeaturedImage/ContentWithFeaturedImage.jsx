import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai";

import "./contentWithFeaturedImage.scss";

const ContentWithFeaturedImage = () => {
  return (
    <section className="featured-image-container">
      <Container>
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
              <h3 className="title">Control your home from your phone</h3>
              <p>Interact with your home wherever you are: </p>
              <ul>
                <li>
                  <AiOutlineCheck size={25} />{" "}
                  <span>
                    Manage your security system, locks, cameras, lights and more
                  </span>
                </li>
                <li>
                  <AiOutlineCheck size={25} />{" "}
                  <span>
                    Receive motion and security alerts directly to your phone
                  </span>
                </li>
                <li>
                  <AiOutlineCheck size={25} />{" "}
                  <span>
                    See and speak to visitors through your camera via the app
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContentWithFeaturedImage;
