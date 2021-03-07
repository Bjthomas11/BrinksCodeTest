import GlobalButton from "../Button/Button";

import "./ctaWithButton.scss";

const CtaWithButton = () => {
  return (
    <div className="cta-button-container">
      <div className="cta-button-inner">
        <p className="title">
          Smart Security <span>Essential</span>
        </p>
        <p className="subtitle">
          Our introductory package offers the essentials to establish your home
          security system.
        </p>
        <img
          src="https://d22pxm4yyww04d.cloudfront.net/spree/hardware_bundle_images/attachments/000/000/246/huge/equipment-system-brinks-home-complete-1092.png"
          alt="security-system"
        />
        <GlobalButton>Learn More</GlobalButton>
      </div>
    </div>
  );
};

export default CtaWithButton;
