import { Container, Row, Col } from "react-bootstrap";

import "./contentWithFeaturedImage.scss";

const ContentWithFeaturedImage = () => {
  return (
    <div className="featured-image-container">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className="img-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/299px-IPhone_X_vector.svg.png"
              alt=""
            />
          </Col>
          <Col xs={12} md={6} lg={8} className="content-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            odio praesentium natus consequuntur excepturi eaque obcaecati
            distinctio, error repellat sunt dolore corporis alias quidem
            repudiandae saepe iure architecto reprehenderit quae!
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentWithFeaturedImage;
