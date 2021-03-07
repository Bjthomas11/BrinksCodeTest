import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import "./mobileModal.scss";

const MobileModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} className="mobile-modal-container">
      <Modal.Header closeButton>
        <Modal.Title className="title">Call Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="p-0">
          <Row>
            <Col xs={12} md={6}>
              <div className="support-container my-2">
                <p className="subtitle ">Support:</p>
                <span className="call">
                  Call: <a href="tel:+8004479239">800.447.9239</a>
                </span>
                <span className="text">
                  Text: <a href="tel:+4695138685">469.513.8685</a>
                </span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="sales-container my-2">
                <p className="subtitle">Sales:</p>
                <span className="call">
                  Call: <a href="tel:+8669569914">866.956.9914</a>
                </span>
                <span className="text">
                  Text: <a href="tel:+4695514997">469.551.4997</a>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default MobileModal;
