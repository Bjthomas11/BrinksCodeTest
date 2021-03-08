import React from "react";
import Slider from "react-slick";
import { IoStarSharp } from "react-icons/io5";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.scss";

const TestimonialSlider = () => {
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
    <div className="testimonial-slider-container">
      <Slider {...settings} className="d-xs-flex d-md-none mobile-slider">
        <div className="text-container">
          <div className="top">
            <div className="icons">
              <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
              <IoStarSharp />
            </div>
            <div className="time">2 hours ago</div>
          </div>

          <div className="text">
            <p>Excellent service and onsite...</p>
            Professional, courteous and thoughtful installation technic...
          </div>
          <p className="author">Alan Unis</p>
        </div>
        <div className="text-container">
          <div className="top">
            <div className="icons">
              <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
              <IoStarSharp />
            </div>
            <div className="time">2 hours ago</div>
          </div>

          <div className="text">
            <p>Excellent service and onsite...</p>
            Professional, courteous and thoughtful installation technic...
          </div>
          <p className="author">Alan Unis</p>
        </div>
        <div className="text-container">
          <div className="top">
            <div className="icons">
              <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
              <IoStarSharp />
            </div>
            <div className="time">2 hours ago</div>
          </div>

          <div className="text">
            <p>Excellent service and onsite...</p>
            Professional, courteous and thoughtful installation technic...
          </div>
          <p className="author">Alan Unis</p>
        </div>
        <div className="text-container">
          <div className="top">
            <div className="icons">
              <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
              <IoStarSharp />
            </div>
            <div className="time">2 hours ago</div>
          </div>

          <div className="text">
            <p>Excellent service and onsite...</p>
            Professional, courteous and thoughtful installation technic...
          </div>
          <p className="author">Alan Unis</p>
        </div>
      </Slider>

      <div className="d-none d-md-flex desktop-blocks">
        <div className="text-container">
          <div className="top">
            <div className="icons">
              <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
              <IoStarSharp />
            </div>
            <div className="time">2 hours ago</div>
          </div>

          <div className="text">
            <p>Excellent service and onsite train...</p>
            Professional, courteous and thoughtful installation technican! The
            system...
          </div>
          <p className="author">Alan Unis</p>
        </div>
        <div className="text-container">
          <div className="top">
            <div className="icons">
              <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
              <IoStarSharp />
            </div>
            <div className="time">2 hours ago</div>
          </div>

          <div className="text">
            <p>Excellent service and onsite train...</p>
            Professional, courteous and thoughtful installation technican! The
            system...
          </div>
          <p className="author">Alan Unis</p>
        </div>
        <div className="text-container">
          <div className="top">
            <div className="icons">
              <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
              <IoStarSharp />
            </div>
            <div className="time">2 hours ago</div>
          </div>

          <div className="text">
            <p>Excellent service and onsite train...</p>
            Professional, courteous and thoughtful installation technican! The
            system...
          </div>
          <p className="author">Alan Unis</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
