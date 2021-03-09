import { Container } from "react-bootstrap";

const Copyright = () => {
  return (
    <small className="copy-container">
      <Container>
        Copyright © {new Date().getFullYear()} Brinks Home®. All rights
        reserved. 1990 Wittington Place, Dallas, TX 75234
      </Container>
    </small>
  );
};

export default Copyright;
