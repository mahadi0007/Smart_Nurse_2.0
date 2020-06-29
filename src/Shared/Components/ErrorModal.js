import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ErrorModal = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.onClear();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{ backgroundColor: "#020624" }}>
        <Modal.Title className="m-auto" style={{ color: "white" }}>
          Smart Nurse Message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-auto">{props.message}</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={handleClose}
          className="btn btn-block text-white text-center"
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "150px",
            borderRadius: "1em",
            height: "35px",
            backgroundColor: "#020624",
            fontSize: "14px",
          }}
        >
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
