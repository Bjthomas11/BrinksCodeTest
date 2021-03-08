import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FiBox, FiInbox, FiBook, FiTruck } from "react-icons/fi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./boxSlider.scss";

const BoxSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="box-slider-container">
      <Container>
        <Slider {...settings} className="d-xs-flex d-md-none">
          <div className="text-container">
            <FiBox size={50} />
            <div className="text">
              <span className="number">1.</span>{" "}
              <div className="inner-text">
                Select your home <br /> security package
              </div>
            </div>
          </div>
          <div className="text-container">
            <FiBook size={50} />
            <div className="text">
              <span className="number">2.</span>
              <div className="inner-text">
                Answer a few security package questions and we'll program it
              </div>
            </div>
          </div>
          <div className="text-container">
            <FiTruck size={50} />
            <div className="text">
              <span className="number">3.</span>
              <div className="inner-text">
                Receive your <br /> labeled ready-to- <br /> use system
              </div>
            </div>
          </div>
          <div className="text-container">
            <FiInbox size={50} />
            <div className="text">
              <span className="number">4.</span>
              <div className="inner-text">
                Unpack, install, and <br />
                activate
              </div>
            </div>
          </div>
        </Slider>

        <div className="d-none d-md-flex desktop-blocks">
          <div className="text-container">
            <FiBox size={50} />
            <div className="text">
              <span className="number">1.</span>{" "}
              <div className="inner-text">
                Select your home <br /> security package
              </div>
            </div>
          </div>
          <div className="text-container">
            <FiBook size={50} />
            <div className="text">
              <span className="number">2.</span>
              <div className="inner-text">
                Answer a few security package questions and we'll program it
              </div>
            </div>
          </div>
          <div className="text-container">
            <FiTruck size={50} />
            <div className="text">
              <span className="number">3.</span>
              <div className="inner-text">
                Receive your <br /> labeled ready-to- <br /> use system
              </div>
            </div>
          </div>
          <div className="text-container">
            <FiInbox size={50} />
            <div className="text">
              <span className="number">4.</span>
              <div className="inner-text">
                Unpack, install, and <br />
                activate
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BoxSlider;
