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
              src="https://i.pinimg.com/originals/15/d4/90/15d4903ffd54f3ad76007ffae8722fc5.png"
              alt="phone_picture"
            />
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
