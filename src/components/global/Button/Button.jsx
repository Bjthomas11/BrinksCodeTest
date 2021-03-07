import Button from "react-bootstrap/Button";

import "./button.scss";

const GlobalButton = ({ children }) => {
  return (
    <Button variant="primary" class="button">
      {children}
    </Button>
  );
};

export default GlobalButton;
