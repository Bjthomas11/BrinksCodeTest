import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

const SlickSlider = () => {
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

  var settings_2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className="slider-container">
      <Container>
        <Slider {...settings} className="d-md-none d-xs-block ">
          <div>
            <img
              src="https://www.adt.com/content/dam/adt6/pages/door-window-sensors/prod_hero_door_window_hires.png"
              alt="slider-img"
            />
            <span>Door sensor</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/703WxBMD06Xmw5dgWO72u6/c2d581bc673a737b026792d4b22983e7/Motion-Sensor_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>Motion detector</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/3JKn0p54at7oHpL4lTOFv5/0bcb35e640da3681f25d0a4c262e8830/Doorbell-Camera_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>SkyBell</span>
          </div>
          <div>
            <img
              src="https://www.adt.com/content/dam/adt6/pages/door-window-sensors/prod_hero_door_window_hires.png"
              alt="slider-img"
            />
            <span>Door sensor</span>
          </div>
        </Slider>
        <Slider {...settings_2} className="d-none d-md-block ">
          <div>
            <img
              src="https://www.adt.com/content/dam/adt6/pages/door-window-sensors/prod_hero_door_window_hires.png"
              alt="slider-img"
            />
            <span>Door sensor</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/703WxBMD06Xmw5dgWO72u6/c2d581bc673a737b026792d4b22983e7/Motion-Sensor_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>Motion detector</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/3JKn0p54at7oHpL4lTOFv5/0bcb35e640da3681f25d0a4c262e8830/Doorbell-Camera_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>SkyBell</span>
          </div>
          <div>
            <img
              src="https://www.adt.com/content/dam/adt6/pages/door-window-sensors/prod_hero_door_window_hires.png"
              alt="slider-img"
            />
            <span>Door sensor</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/703WxBMD06Xmw5dgWO72u6/c2d581bc673a737b026792d4b22983e7/Motion-Sensor_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>Motion detector</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/3JKn0p54at7oHpL4lTOFv5/0bcb35e640da3681f25d0a4c262e8830/Doorbell-Camera_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>SkyBell</span>
          </div>
          <div>
            <img
              src="https://www.adt.com/content/dam/adt6/pages/door-window-sensors/prod_hero_door_window_hires.png"
              alt="slider-img"
            />
            <span>Door sensor</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/703WxBMD06Xmw5dgWO72u6/c2d581bc673a737b026792d4b22983e7/Motion-Sensor_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>Motion detector</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/3JKn0p54at7oHpL4lTOFv5/0bcb35e640da3681f25d0a4c262e8830/Doorbell-Camera_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>SkyBell</span>
          </div>
          <div>
            <img
              src="https://www.adt.com/content/dam/adt6/pages/door-window-sensors/prod_hero_door_window_hires.png"
              alt="slider-img"
            />
            <span>Door sensor</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/703WxBMD06Xmw5dgWO72u6/c2d581bc673a737b026792d4b22983e7/Motion-Sensor_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>Motion detector</span>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/n58cc9djl3c5/3JKn0p54at7oHpL4lTOFv5/0bcb35e640da3681f25d0a4c262e8830/Doorbell-Camera_DS.png?fm=png&fl=png8"
              alt="slider-img"
            />
            <span>SkyBell</span>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default SlickSlider;
