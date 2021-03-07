import Button from "react-bootstrap/Button";

const GlobalButton = ({ buttonText }) => {
  return (
    // <Button variant="primary" className="global-button">
    //   {buttonText}
    // </Button>
    <Button variant="primary">{buttonText}</Button>
  );
};

export default GlobalButton;
