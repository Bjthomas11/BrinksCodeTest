import { Container } from "react-bootstrap";
import SlickSlider from "./Slider";

import "./imageSlider.scss";

const ImageSlider = () => {
  return (
    <section className="image-slider-container">
      <Container>
        <div className="content">
          <h3>Discover our devices</h3>
          <p>
            ® At Brinks Home , we know that life changes. We’ve made it easy to
            add devices to your system that seamlessly connect to what you
            already have, are accessible on the app, and can be controlled
            through other smart home technology.
          </p>
        </div>
        <SlickSlider />
      </Container>
    </section>
  );
};

export default ImageSlider;
