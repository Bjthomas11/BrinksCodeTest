import { useState, useRef } from "react";
import { Tooltip } from "react-bootstrap";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { GiSmartphone, GiCctvCamera } from "react-icons/gi";
import { CgScreen } from "react-icons/cg";

import Overlay from "react-bootstrap/Overlay";

import "./heroOverlay.scss";

const HeroOverlay = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const showOverlay = () => setShow(!show);
  const closeOverlay = () => setShow(false);
  return (
    <div className="outer-overlay-container">
      <div className="security-icons">
        <span
          className="security-icon"
          style={{ top: "50%", right: "60%" }}
          ref={target}
          onClick={showOverlay}
        >
          <GiSmartphone color="#fff" size={35} />
        </span>

        <span className="security-icon" style={{ top: "5%", left: "20%" }}>
          <GiCctvCamera color="#fff" size={35} />
        </span>

        <span className="security-icon" style={{ top: "60%", left: "10%" }}>
          <CgScreen color="#fff" size={35} />
        </span>
      </div>

      <Overlay
        target={target.current}
        show={show}
        placement="right"
        className="hero-overlay-container"
      >
        {(props) => (
          <Tooltip {...props}>
            <div className="inner-overlay-container">
              <button className="close" onClick={closeOverlay}>
                <AiOutlineClose color="#fff" size={25} />
              </button>
              <h3 className="title">
                <GiSmartphone color="#fff" size={35} /> Smart app
              </h3>

              <ul>
                <li>
                  <AiOutlineCheck /> Full access to your system
                </li>
                <li>
                  <AiOutlineCheck /> Real-time notifcations
                </li>
                <li>
                  <AiOutlineCheck /> View live/stored video
                </li>
                <li>
                  <AiOutlineCheck /> Full access video doorbell
                </li>
                <li>
                  <AiOutlineCheck /> Control locks remotely
                </li>
              </ul>
            </div>
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};

export default HeroOverlay;
