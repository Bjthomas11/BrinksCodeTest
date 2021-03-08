import Button from "react-bootstrap/Button";

import "./button.scss";

const GlobalButton = ({ children, type }) => {
  return (
    <Button variant="primary" className="button" type={type}>
      {children}
    </Button>
  );
};

export default GlobalButton;
