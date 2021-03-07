import { useState } from "react";
import { BiPhone } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import GlobalButton from "../global/Button/Button";
import MobileModal from "./MobileModal";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const MobileNav = () => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const [innerMenuClick, setInnerMenuClick] = useState(false);
  const [innerMenuClick_2, setInnerMenuClick_2] = useState(false);
  const [innerMenuClick_3, setInnerMenuClick_3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => setClick(!click);
  const handleInnerMenu = (e) => setInnerMenuClick(!innerMenuClick);
  const handleInnerMenu_2 = (e) => setInnerMenuClick_2(!innerMenuClick_2);
  const handleInnerMenu_3 = (e) => setInnerMenuClick_3(!innerMenuClick_3);

  const closeMobileMenu = () => setClick(false);

  return (
    <div className="mobile-nav-container">
      <div className="menu-container" onClick={handleClick}>
        {click ? (
          <AiOutlineClose color="#fff" fontSize="30" />
        ) : (
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        )}
      </div>
      <div className="logo-container">
        <img
          src="https://us.brinks.com/o/brinks-website-theme/images/logos/brinks/brinks-logo-white.png"
          alt="brinks-logo"
        />
      </div>
      <div className="call-container">
        <BiPhone color="#fff" fontSize="20" onClick={handleShow} />
      </div>

      {show && <MobileModal show={show} handleClose={handleClose} />}

      {click && (
        <SlideDown className={"link-container"} click={click}>
          <ul>
            <li>
              <a href="/" onClick={closeMobileMenu}>
                How It Works
              </a>
            </li>
            <li className="more-links">
              <a
                onClick={handleInnerMenu}
                role="button"
                aria-expanded={`${innerMenuClick}`}
              >
                About Us <span className="chevron bottom"></span>
              </a>
              {innerMenuClick && (
                <ul>
                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      Our Story
                    </a>
                  </li>

                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      Smart Center
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="more-links">
              <a
                onClick={handleInnerMenu_2}
                role="button"
                aria-expanded={`${innerMenuClick_2}`}
              >
                Support <span className="chevron bottom"></span>
              </a>
              {innerMenuClick_2 && (
                <ul>
                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      Moving?
                    </a>
                  </li>
                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      False Alarm Prevention
                    </a>
                  </li>
                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      Bill of Rights
                    </a>
                  </li>
                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      Contact U
                    </a>
                  </li>
                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      FAQs
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <ul>
            <li className="btn-link">
              <GlobalButton buttonText="Shop Now" onClick={closeMobileMenu} />
            </li>
          </ul>
          <ul>
            <li>
              <a href="tel:800.447.9239">Call Us</a>
            </li>

            <li className="more-links">
              <a
                onClick={handleInnerMenu_3}
                role="button"
                aria-expanded={`${innerMenuClick_3}`}
              >
                My Account <span className="chevron bottom"></span>
              </a>
              {innerMenuClick_3 && (
                <ul>
                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      Sign In
                    </a>
                  </li>

                  <li>
                    <a href="!#" onClick={closeMobileMenu}>
                      Register
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </SlideDown>
      )}
    </div>
  );
};

export default MobileNav;
